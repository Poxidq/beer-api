import app from "./app";

import createSampleBeers from "./utils/fillTheDb";
import config from "./config";

app.listen(config.port, () => {
  if (config.beerInitialization === "INIT_TRUE") {
    createSampleBeers();
  }
  console.log(`🚀 ${config.name} ${config.version} 🚀`);
  console.log(
    `🚀 Listening on ${config.port} with NODE_ENV=${config.nodeEnv} 🚀`
  );
});
