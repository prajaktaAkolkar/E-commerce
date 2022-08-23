export interface Payment{
    success: boolean;
    data: [{ user_id: number; card_name: string; total_amount:number }];
    message: string;
}