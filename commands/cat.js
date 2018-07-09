const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let catembed = new Discord.RichEmbed()
    .setColor("#ff00ff")
    .setTitle("Meow! :cat:")
    .setImage(body.file);

    message.channel.send(catembed);
}

module.exports.help = {
    name: "cat"
}