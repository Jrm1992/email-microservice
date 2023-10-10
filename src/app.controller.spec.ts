import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should rredirect to /api', () => {
      const mockResponse = {
        redirect: jest.fn(),
      };

      appController.redirect(mockResponse);

      expect(mockResponse.redirect).toHaveBeenCalledWith('/api');
    });
  });
});
