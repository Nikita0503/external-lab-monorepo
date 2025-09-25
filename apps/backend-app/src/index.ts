import dotenv from "dotenv";
import { initApp, initSequelize } from "./utils/init";

dotenv.config();
const PORT = 4000;
const app = initApp(__dirname);

app.listen(PORT, async () => {
  await initSequelize();
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
