import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { RabbitMQService } from './infrastructure/rabbit-mq/rabbit-mq.service';
import { MessageDto } from "./infrastructure/dtos/message.dto";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sendMsg(@Body() message: MessageDto): string {
    // noinspection JSIgnoredPromiseFromCall
    this.rabbitMQService.send('rabbit-mq-producer', {
      message: message.message,
    });
    return 'Message sent to the queue!';
  }
}
