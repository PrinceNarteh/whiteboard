import { createServer } from "http";
import app from "./appServer";

const httpServer = createServer(app);
const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default httpServer;
