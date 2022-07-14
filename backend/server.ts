import router from "./routes.ts";
import { Application, Database, Relationships, SQLite3Connector } from "./mod.ts";
import { Location } from "./models/location.ts";
import { Review } from "./models/review.ts";
import { oakCors } from "./mod.ts";

const HOST = '127.0.0.1'
const PORT = 7700

// Database
const connector = new SQLite3Connector({
    filepath: './data/database.sqlite',
});

const db = new Database(connector);
Relationships.belongsTo(Review, Location);

db.link([ Review, Location ]);
db.sync();

// App
const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)