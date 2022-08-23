export interface Cart {
    success: boolean;
    data: [{ 
        user_id : number;
        product_id: number;
        quant: number;
        quant_minus?: number;
    }];
    message: string;
}