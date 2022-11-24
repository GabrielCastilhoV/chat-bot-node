const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.on("message", (msg) => {
  if (msg.content === "!help") {
    const embed = new Discord.RichEmbed()
      .setTitle("Comandos")
      .setColor("#f50057")
      .addField("!help", "Mostra esta mensagem")
      .addField("!authors", "Mostra os autores deste bot")
      .addField("!ping", "O bot irá responder o ping atual")
      .addField("!say", "O bot irá repetir o que você diz")
      .addField("!day", "O bot irá responder com o dia atual")
      .addField("!time", "O bot irá responder com a hora atual");

    msg.channel.send(embed);
  }
});

client.on("message", (msg) => {
  if (msg.content === "!ping") {
    const ping = client.ping;
    msg.channel.send(`O ping é ${ping}ms`);
  }
});

client.on("message", (msg) => {
  if (msg.content.includes("!say")) {
    const say = msg.content.split(" ").slice(1).join(" ");
    msg.channel.send(say);
  }
});

client.on("message", (msg) => {
  if (msg.content === "!authors") {
    const embed = new Discord.RichEmbed()
      .setTitle("Autores")
      .setColor("#f50057")
      .addField("Afonso Matheus", "Back-end developer")
      .addField("Gabriel Castilho", "Front-end developer")
      .addField("Matheus Littig", "Front-end developer");

    msg.channel.send(embed);
  }
});

client.on("message", (msg) => {
  if (msg.content === "!day") {
    const date = new Date();
    const day = date.getDay();

    const dayName = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    msg.channel.send(`Hoje é ${dayName[day]}`);
  }
});

client.on("message", (msg) => {
  if (msg.content === "!time") {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    msg.channel.send(`O tempo é: ${hours}:${minutes}:${seconds}`);
  }
});

client.on("ready", () => {
  client.channels.find((x) => x.name === "bot").send("Olá, eu sou o bot!");
});

client.login(`${process.env.TOKEN}`);
