import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './infrastructure/rabbit-mq/rabbit-mq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  getHello(): string {
    // noinspection JSIgnoredPromiseFromCall
    this.rabbitMQService
      .send('rabbit-mq-producer', {
        message: this.appService.getHello(),
      })
      .subscribe();
    return 'Message sent to the queue!';
  }
}
