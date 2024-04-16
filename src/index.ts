import config from "@/config";
import app from "@/server";
import { connect } from "@/db";

app.listen(config.server.port, () => {
  console.log(`Server started on port ${config.server.port}`);
  connect();
});