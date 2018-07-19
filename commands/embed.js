const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!args[1]){
        message.reply("What you want me to embed?")
    }else{
        let usermsg = args.join(" ");

        let Embedmsg = new Discord.RichEmbed()
        .setColor("#A973F9")
        .setThumbnail(message.author.avatarURL)
        .addField(memberInfo.displayName + " Wanted to Say", usermsg);

        message.channel.send(Embedmsg);
    }

}

module.exports.help = {
    name: "embed"
}