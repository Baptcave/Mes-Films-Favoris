import { Request } from "express"

export interface ITokenInfoRequest extends Request {
  userId?: string;
  userName?: string;
}
