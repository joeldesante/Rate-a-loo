import { Model, DataTypes } from "../mod.ts";

export class Review extends Model {
    static table = "reviews";
    static timestamps = true;
    
    static fields = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        score: DataTypes.INTEGER,
        details: DataTypes.STRING,
        image: DataTypes.STRING
    };

    static owner() {
        return this.hasOne(Location);
    }
}