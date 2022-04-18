import app from "./app";
import { startConnection } from "./database";

startConnection();
app.listen(3000);
console.log("This server is running in port 3000");
