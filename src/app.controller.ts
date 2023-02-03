import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './infrastructure/rabbit-mq/rabbit-mq.service';
import { map, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  getHello() {
    // noinspection JSIgnoredPromiseFromCall
    this.rabbitMQService
      .send('rabbit-mq-producer', {
        message: this.appService.getHello(),
      })
      .toPromise();
    return 'message sent';
  }
}
