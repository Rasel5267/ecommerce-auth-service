import { Schema, model } from 'mongoose';
import { ISeller, SellerModel } from './seller.interface';

const SellerSchema = new Schema<ISeller, SellerModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    contactNo: {
      type: String,
      unique: true,
      required: true,
    },
    storeName: {
      type: String,
      required: true,
    },
    storeLogo: {
      type: String,
      required: true,
    },
    storeBanner: {
      type: String,
      required: true,
    },
    storeDescription: {
      type: String,
      required: true,
    },
    storeAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentDetails: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Seller = model<ISeller, SellerModel>('Seller', SellerSchema);
