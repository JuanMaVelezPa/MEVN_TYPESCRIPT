import app from "./app";
import { startConnection } from "./database";
import * as dotenv from "dotenv";

dotenv.config();
startConnection();
app.listen(process.env.PORT!);
