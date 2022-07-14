import { Model, DataTypes } from "../mod.ts";
import { Review } from "./review.ts";

export class Location extends Model {
    static table = "locations";
    static timestamps = true;
    
    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        address: DataTypes.STRING,
    };

    static reviews() {
        return this.hasMany(Review);
    }
}