import { Test, TestingModule } from '@nestjs/testing';
import { SitiosController } from './sitios.controller';

describe('SitiosController', () => {
  let controller: SitiosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SitiosController],
    }).compile();

    controller = module.get<SitiosController>(SitiosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
