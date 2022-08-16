export interface Products{
    success: boolean;
    data: [{
         id: number;
         cat_id: number;
         product_name: string; 
         image: string; 
         price:number;
         quantity: number;
         discount_price: number;
         top_seller: number;
         recently_view: number;
         top_new: number;
         details:string;

        }];
    message: string;
}