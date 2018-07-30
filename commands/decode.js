const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!args[0]) return message.reply("What you want me to decode?")


    let Decodemsg = args.slice(0).join(" ");

    let decoded = "";
    let arr = Decodemsg.match(/.{1,8}/g);
    for (var i = 0; i < arr.length; i++) {
        decoded += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }

    message.delete().catch();
    message.channel.send(decoded);


}

module.exports.help = {
    name: "decode"
}