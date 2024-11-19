import BaseURL from "./BaseURL";
import { commonAPI } from "./commonAPI";

interface RequestBody {
  message: string;
  
}
interface RegisterRequestBody {
  fullname: string;
  phone_no: string;
  company_name: string;
  email: string;
}


export const sendMessage = async (reqBody: RequestBody): Promise<any> => {
  return await commonAPI("POST", `${BaseURL}/chat`, reqBody);
};

export const register = async (reqBody: RegisterRequestBody): Promise<any> => {
  return await commonAPI("POST", `${BaseURL}/register`, reqBody);
};

export const getAllBanner = async (): Promise<any> => {
  return await commonAPI("GET", `${BaseURL}/banners`);
};
