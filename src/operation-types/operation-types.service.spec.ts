import { Test, TestingModule } from '@nestjs/testing'
import { OperationTypesService } from './operation-types.service'

describe('OperationTypesService', () => {
  let service: OperationTypesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationTypesService],
    }).compile()

    service = module.get<OperationTypesService>(OperationTypesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
