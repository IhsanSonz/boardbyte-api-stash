import { Document } from 'mongoose';
export interface User extends Document {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  provider?: string;
  providerId?: string;
  picture?: string;
  refreshToken?: string;
}
