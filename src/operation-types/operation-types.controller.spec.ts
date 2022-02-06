import { Test, TestingModule } from '@nestjs/testing'
import { OperationTypesController } from './operation-types.controller'

describe('OperationTypesController', () => {
  let controller: OperationTypesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationTypesController],
    }).compile()

    controller = module.get<OperationTypesController>(OperationTypesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
