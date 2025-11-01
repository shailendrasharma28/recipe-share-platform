const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const { default: helmet } = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

module.exports = (app) => {
  app.use(express.static(path.join(__dirname, "frontend")));
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
    })
  );
  const logDir = path.join(__dirname, "../logs");
  if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir, { recursive: true });
  }
  const accessLogs = fs.createWriteStream(path.join(logDir, `access.log`), {
    flags: `a`,
  });
  // app.use(helmet());
  app.use(compression());
  app.use(morgan("combined", { stream: accessLogs }));
};