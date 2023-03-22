import AllProduct from './components/products/AllProduct.vue';
import CreateProduct from './components/products/CreateProduct.vue';
import EditProduct from './components/products/EditProduct.vue';

import UserList from './components/users/UserList.vue';
import UserCreate from './components/users/UserCreate.vue';
import UserEdit from './components/users/UserEdit.vue';

export const routes = [
  {
    name: 'products',
    path: '/',
    component: AllProduct
  },
  {
    name: 'create',
    path: '/create-product',
    component: CreateProduct
  },
  {
    name: 'edit',
    path: '/edit-product/:id',
    component: EditProduct
  },
  {
    name: 'users',
    path: '/users',
    component: UserList
  },
  {
    name: 'create-user',
    path: '/create-user',
    component: UserCreate
  },
  {
    name: 'edit-user',
    path: '/edit-user/:id',
    component: UserEdit
  },
];