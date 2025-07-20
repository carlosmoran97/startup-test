import { Test, TestingModule } from '@nestjs/testing';
import { SitiosService } from './sitios.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SitioEntity } from './sitio.entity';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';

const mockRepository = () => ({
  findAndCount: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
});

type MockRepository = ReturnType<typeof mockRepository>;

describe('SitiosService', () => {
  let service: SitiosService;
  let repository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SitiosService,
        {
          provide: getRepositoryToken(SitioEntity),
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<SitiosService>(SitiosService);
    repository = module.get(getRepositoryToken(SitioEntity));
  });

  describe('find', () => {
    it('should return paginated data', async () => {
      const items = [{ id: 1 }, { id: 2 }];
      repository.findAndCount.mockResolvedValue([items, 2]);
      const result = await service.find({ limit: 2, offset: 0 });
      expect(result).toEqual({
        data: items,
        total: 2,
        limit: 2,
        offset: 0,
      });
      expect(repository.findAndCount).toHaveBeenCalledWith({
        skip: 0,
        take: 2,
        order: { id: 'DESC' },
      });
    });
  });

  describe('findOne', () => {
    it('should return sitio if found', async () => {
      const sitio = { id: 1, nombre: 'Playa' };
      repository.findOneBy.mockResolvedValue(sitio);
      const result = await service.findOne(1);
      expect(result).toEqual(sitio);
    });

    it('should throw NotFoundException if sitio not found', async () => {
      repository.findOneBy.mockResolvedValue(undefined);
      await expect(service.findOne(2)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should save and return sitio', async () => {
      const dto = { nombre: 'Sitio nuevo' };
      repository.save.mockResolvedValue(dto);
      expect(await service.create(dto as any)).toEqual(dto);
    });

    it('should throw InternalServerErrorException on error', async () => {
      repository.save.mockRejectedValue(new Error('fail'));
      await expect(service.create({ nombre: 'x' } as any)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('like', () => {
    it('should increment likes and save sitio', async () => {
      const sitio = { id: 1, likes: 1 };
      repository.findOneBy.mockResolvedValue(sitio);
      repository.save.mockResolvedValue({ ...sitio, likes: 2 });
      const result = await service.like(1);
      expect(result.likes).toBe(2);
    });

    it('should throw NotFoundException if sitio not found', async () => {
      repository.findOneBy.mockResolvedValue(undefined);
      await expect(service.like(9)).rejects.toThrow(NotFoundException);
    });

    it('should throw InternalServerErrorException on save error', async () => {
      repository.findOneBy.mockResolvedValue({ id: 2, likes: 0 });
      repository.save.mockRejectedValue(new Error('fail'));
      await expect(service.like(2)).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('update', () => {
    it('should update and save sitio', async () => {
      const sitio = { id: 1, nombre: 'Sitio' };
      repository.findOneBy.mockResolvedValue(sitio);
      repository.save.mockResolvedValue({ ...sitio, nombre: 'Nuevo' });
      const result = await service.update(1, { nombre: 'Nuevo' });
      expect(result.nombre).toBe('Nuevo');
    });

    it('should throw NotFoundException if sitio not found', async () => {
      repository.findOneBy.mockResolvedValue(undefined);
      await expect(service.update(5, { nombre: 'x' })).rejects.toThrow(NotFoundException);
    });

    it('should throw InternalServerErrorException on save error', async () => {
      repository.findOneBy.mockResolvedValue({ id: 1, nombre: 'y' });
      repository.save.mockRejectedValue(new Error('fail'));
      await expect(service.update(1, { nombre: 'z' })).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('delete', () => {
    it('should delete sitio if exists', async () => {
      repository.findOneBy.mockResolvedValue({ id: 1 });
      repository.delete.mockResolvedValue({ affected: 1 });
      expect(await service.delete(1)).toEqual({ affected: 1 });
    });

    it('should throw NotFoundException if sitio not found', async () => {
      repository.findOneBy.mockResolvedValue(undefined);
      await expect(service.delete(6)).rejects.toThrow(NotFoundException);
    });
  });
});
