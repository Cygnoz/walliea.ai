import BaseURL from "./BaseURL";
import { commonAPI } from "./commonAPI";

interface RequestBody {
  message: string;
}

export const sendMessage = async (reqBody: RequestBody): Promise<any> => {
  return await commonAPI("POST", `${BaseURL}/chat`, reqBody);
};
