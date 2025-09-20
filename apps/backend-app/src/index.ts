import { initApp, initSequelize } from "./utils/init";
import dotenv from "dotenv";

dotenv.config();
const PORT = 4000;
const app = initApp();

app.listen(PORT, async () => {
  await initSequelize();
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
