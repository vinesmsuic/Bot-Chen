const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!args[0]) return message.reply("What you want me to encode?")


    let Encodemsg = args.slice(0).join(" ");

    let encoded = "";
    for (var i = 0; i < Encodemsg.length; i++) {
        let bin = Encodemsg[i].charCodeAt().toString(2);
        encoded += Array(8 - bin.length + 1).join("0") + bin;
    } 

    message.channel.send(encoded);


    }

module.exports.help = {
    name: "encode"
}