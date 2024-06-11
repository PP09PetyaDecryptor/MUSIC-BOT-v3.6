const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "play-not-working",
  description: "d.",
  options: [],
  permissions: "0x0000000000000800",

  const embed = new EmbedBuilder()
  .setAuthor({
    name: "biegunkaaawhynot",
    url: "https://dsc.gg/freemembers",
  })
  .setTitle("Help with play command if its not working")
  .setDescription("The /play command is not working because you pasted URL than the video/song name.")
  .setImage("https://cubedhuang.com/images/alex-knight-unsplash.webp")
  .setColor("#00b0f4")
  .setFooter({
    text: "Music King (biegunkaawhynot)",
    iconURL: "https://slate.dan.onl/slate.png",
  });

await message.reply({ embeds: [embed] });
