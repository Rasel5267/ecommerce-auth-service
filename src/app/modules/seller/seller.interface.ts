import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type ISeller = {
  email: string;
  name: UserName;
  contactNo: string;
  storeName: string;
  storeLogo: string;
  storeBanner: string;
  storeDescription: string;
  storeAddress: string;
  paymentMethod: string;
  paymentDetails: string;
  status?: boolean;
  isVerified?: boolean;
};

export type SellerModel = Model<ISeller, Record<string, unknown>>;

export type ISellerFilters = {
  searchTerm?: string;
  email?: string;
  contactNo?: string;
  storeName?: string;
};
