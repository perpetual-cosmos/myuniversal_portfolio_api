const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 5000;

// Read JSON file once
const data = JSON.parse(fs.readFileSync("data.json"));






