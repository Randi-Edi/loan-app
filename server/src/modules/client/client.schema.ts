
import { number, object, string, TypeOf } from "zod";

export const createClientSchema = {
  body: object({
    fullName: string({
      required_error: "Name is required",
    }),
    amount: number({
      required_error: "Amount is required",
    }).positive(),
    imageUrl: string({
      required_error: "image is required",
    }),
  }),
};

export type CreateClientBody = TypeOf<typeof createClientSchema.body>;