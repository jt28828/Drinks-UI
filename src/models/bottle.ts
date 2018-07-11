import { ServerBottle } from '@/models/serverResponses/bottle';

/** Contains all of the data and methods needed to manage a bottle */
export class Bottle {
    public id: number;
    public name: string;
    public type: string;
    public imageUrl: string;
    public alcoholContent: number;
    /** Whether or not the bottle is currently being viewed by the user */
    public isOpen: boolean = false;

    constructor(serverBottle: ServerBottle) {
        this.id = serverBottle.bottle_id;
        this.name = serverBottle.bottle_name;
        this.type = serverBottle.bottle_type;
        this.imageUrl = serverBottle.bottle_image;
        this.alcoholContent = serverBottle.alcohol_content_percent;
    }
}
