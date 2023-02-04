import { MessageModel } from "../../core/models/message.model";

export interface MessageDto {
  message: string;
}

export const convertMessageDtoToModel = (dto: MessageDto): MessageModel => {
  return { message: dto.message };
};

export const convertMessageModelToDto = (model: MessageModel): MessageDto => {
  return { message: model.message };
};
