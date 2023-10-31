const bodyParser = require("body-parser");
const express = require("express");

const { PORT } = require("./config/serverConfig");
const { createChannel } = require("./utils/messageQueue");

const jobs = require("./utils/job");

//const { sendBasicEmail } = require("./services/email-service");

const TicketController = require("./controllers/ticket-controller");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const channel = await createChannel();

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
    //jobs();
    // sendBasicEmail(
    //   "reminderservice343@gmail.com",
    //   "edukumar764@gmail.com",
    //   "This is a testing email",
    //   "Hey, how are you, I hope you like the support"
    // );
  });
};

setupAndStartServer();
