/** The data retrieved from the server when requesting a drink */
export interface ServerDrink {
    drink_name: string;
    drink_image: string;
    drink_color: string;
    ingredient_1: string;
    ingredient_2: string;
    ingredient_3: string;
    ingredient_4: string;
    ingredient_1_amount: number;
    ingredient_2_amount: number;
    ingredient_3_amount: number;
    ingredient_4_amount: number;
}