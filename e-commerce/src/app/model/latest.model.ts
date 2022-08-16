export interface LatestProduct{
    success: boolean;
    data: [{ id: number; product_name: string; image: string; price:number }];
    message: string;
}