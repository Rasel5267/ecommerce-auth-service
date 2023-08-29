import { Model, Types } from 'mongoose';
import { IAdmin } from '../admin/admin.interface';
import { ISeller } from '../seller/seller.interface';
import { ICustomer } from '../customer/customer.interface';

export type IUser = {
  email: string;
  role: string;
  password: string;
  customer?: Types.ObjectId | ICustomer;
  seller?: Types.ObjectId | ISeller;
  admin?: Types.ObjectId | IAdmin;
};

export type UserModel = {
  isUserExist(id: string): Promise<Pick<IUser, 'email' | 'password' | 'role'>>;
  isPasswordMatch(
    currentPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
