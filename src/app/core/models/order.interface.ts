export interface ClientI{
    email: string;
}

export interface OrderI{
    id?: string | undefined;
    status: string;
    cart_products: CartProductI[] 
    total_price: string;
}

export interface CartProductI{
    prod_id: string | undefined;
    prod_name: string;
    price: string;
    quantity: number;
}