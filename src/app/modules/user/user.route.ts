import express from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/create-customer',
  validateRequest(UserValidation.createCustomerZodSchema),
  UserController.createCustomer
);

router.post(
  '/create-seller',
  validateRequest(UserValidation.createSellerZodSchema),
  UserController.createSeller
);

router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin
);

export const UserRoutes = router;
