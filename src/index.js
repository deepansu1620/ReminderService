const bodyParser = require("body-parser");
const express = require("express");

const { PORT } = require("./config/serverConfig");

const cron = require("node-cron");

//const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);

    // sendBasicEmail(
    //   "reminderservice343@gmail.com",
    //   "edukumar764@gmail.com",
    //   "This is a testing email",
    //   "Hey, how are you, I hope you like the support"
    // );
    cron.schedule("*/2 * * * *", () => {
      console.log("running a task every two minutes");
    });
  });
};

setupAndStartServer();
