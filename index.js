import Discord from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const { BOT_TOKEN } = process.env;

const client = new Discord.Client();

client.on("message", (message) => {
  if (message.author.bot) return;

  const commandBody = message.content.split("a");

  const min = parseInt(commandBody[0]);
  const max = parseInt(commandBody[1]);

  if (message.content === `${min}a${max}` && message.channel.id == "769688960619511860") {
    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    message.reply(`***Sorteado ❯ ${sorteado} ***`);
  }
});

client.login(BOT_TOKEN).then(() => console.log("Bot online!"));
