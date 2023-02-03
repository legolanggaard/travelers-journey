import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './infrastructure/rabbit-mq/rabbit-mq.service';
import { map, Observable } from "rxjs";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  getHello(): Observable<string> {
    // noinspection JSIgnoredPromiseFromCall
    return this.rabbitMQService
      .send('rabbit-mq-producer', {
        message: this.appService.getHello(),
      })
      .pipe(
        map((data) => {
          console.log('data', data);
          return `Message sent to the queue! DATA: ${data}`;
        }),
      );
  }
}
