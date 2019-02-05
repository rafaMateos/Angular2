import { Product } from './product';

export class Order {

    customer: string;
    supplier: string;
    orderDate: Date;
    dispatchDate: Date; 
    productList : Product[];
}
