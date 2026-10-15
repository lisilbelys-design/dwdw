console.clear();
require("dotenv").config();
const process = require('node:process');
const { verifyENV } = require("./write");
const { textColored, createNecesaryFiles } = require("./function");
const CFonts = require('cfonts');

// Display the bot name
CFonts.say("Razor", {
  font: "block",
  align: "center",
  colors: ["#ff434e", 'white']
});

// Display the author name
CFonts.say("By: @arpandevv", {
  font: "console",
  align: 'center',
  colors: ["red"]
});

// Display the source code link and Discord invite
CFonts.say("Source Code: https://builtbybit.com/resources/razor-an-all-in-one-discord-bot.29648/\n[Leave a Star and join our Discord https://discord.gg/WsGZrzzWP2]", {
  font: "console",
  align: 'center',
  colors: ['red']
});

// Start function to create necessary files and verify environment
const start = async () => {
  const filesCreated = await createNecesaryFiles();
  
  if (filesCreated) {
    console.log(textColored("✓ Your required files have been created, please restart the bot."));
    setTimeout(() => {
      return process.exit();
    }, 5000); // 0x1388 in decimal is 5000
  } else {
    verifyENV();
    require('../load');
  }
};

// Execute the start function
start();