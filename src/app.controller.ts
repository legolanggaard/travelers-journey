import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  getHello() {
    // noinspection JSIgnoredPromiseFromCall
    /*this.rabbitMQService
      .send('rabbit-mq-producer', {
        message: this.appService.getHello(),
      })
      .subscribe();*/
    return 'message sent';
  }
}
