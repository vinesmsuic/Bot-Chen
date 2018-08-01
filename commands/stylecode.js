const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


    let codemsg = args.slice(0).join(" ");

    let styledmsg = "```" + codemsg + "```"

    message.delete().catch();
    message.channel.send(styledmsg);
    
}

module.exports.help = {
    name: "code"
}