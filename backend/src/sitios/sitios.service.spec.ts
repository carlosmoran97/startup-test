import { Test, TestingModule } from '@nestjs/testing';
import { SitiosService } from './sitios.service';

describe('SitiosService', () => {
  let service: SitiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SitiosService],
    }).compile();

    service = module.get<SitiosService>(SitiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
