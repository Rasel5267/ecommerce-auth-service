import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { CustomerRoutes } from '../modules/customer/customer.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
