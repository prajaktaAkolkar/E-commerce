export interface Checkout {
    success: boolean;
    data: [{ 
        user_id: number; 
        compony_name: string; 
        email: string;
        first_name: string;
        last_name : string;
        address1: string;
        address2: string;
        zip_code: number;
        country: string;
        state: string;
        city: string;
        phone: number;
        optional_address: string;

    }];
    message: string;
}