import { ServerDrink } from '@/models/serverResponses/drink';

/** Contains all of the data and methods needed to manage a bottle */
export class Drink {
    public name: string;
    public image: string;
    public color: string;
    public ingredient1: string;
    public ingredient2: string;
    public ingredient3: string;
    public ingredient4: string;
    public ingredient1Amount: number;
    public ingredient2Amount: number;
    public ingredient3Amount: number;
    public ingredient4Amount: number;
    /** Whether or not the bottle is currently being viewed by the user */
    public isOpen: boolean = false;

    constructor(serverDrink: ServerDrink) {
        this.name = serverDrink.drink_name;
        this.image = serverDrink.drink_image;
        this.color = serverDrink.drink_color;
        this.ingredient1 = serverDrink.ingredient_1;
        this.ingredient2 = serverDrink.ingredient_2;
        this.ingredient3 = serverDrink.ingredient_3;
        this.ingredient4 = serverDrink.ingredient_4;
        this.ingredient1Amount = serverDrink.ingredient_1_amount;
        this.ingredient2Amount = serverDrink.ingredient_2_amount;
        this.ingredient3Amount = serverDrink.ingredient_3_amount;
        this.ingredient4Amount = serverDrink.ingredient_4_amount;
    }
}
