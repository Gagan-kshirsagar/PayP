import { config } from "dotenv";
import { executeCurdOperation } from "./serverSrc.js";

config();

// console.log(process.env.DB_URI);

await executeCurdOperation();
