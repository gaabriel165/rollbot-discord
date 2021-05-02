import Discord from "discord.js";
import dotenv from "dotenv";

dotenv.config();
const { BOT_TOKEN } = process.env;

const bot = new Discord.Client();

bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find((channel) => channel.id === "838525413558714418");
  channel.send(`${member}, **Ao Infinito e Além!** :rocket: :muscle:`);
});

bot.on("message", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!roll") {
    const sorteado = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    const dado = await message.reply({ files: [`./gifs/${sorteado}.gif`] });

    setTimeout(() => {
      message.delete();
      dado.delete();
    }, 5000);
  }
});

bot.login(BOT_TOKEN).then(() => console.log("Bot online!"));
