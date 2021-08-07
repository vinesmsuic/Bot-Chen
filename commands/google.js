const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!args[0]) return message.reply("What you want me to google?")

    let lmgtfy = "https://letmegooglethat.com/?q="
    let question = args.join("+");

    let lmgtfyq = lmgtfy + question;

    message.channel.send(lmgtfyq);


}

module.exports.help = {
    name: "google"
}