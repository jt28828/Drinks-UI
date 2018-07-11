/** The data retrieved from the server when requesting a bottle */
export interface ServerBottle {
    bottle_id: number;
    bottle_name: string;
    bottle_type: string;
    bottle_image: string;
    alcohol_content_percent: number;
}
