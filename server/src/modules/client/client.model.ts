import { getModelForClass, prop } from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

export class Client {
  @prop({ required: true, unique: true })
  public fullName: string;

  @prop()
  public imageUrl: string;

  @prop()
  public amount: number;

  @prop({ unique: true, default: () => nanoid() })
  public clientId?: string;
}

export const ClientModel = getModelForClass(Client, {
  schemaOptions: {
    timestamps: true,
  },
});
