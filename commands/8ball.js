const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No.", "I don't know"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    //.setAuthor(message.author.tag)
    .setColor("#FF3377")
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setThumbnail(`https://78.media.tumblr.com/bae6877a04f06d34ef9464806c4a7296/tumblr_obwoxdilyJ1u349h5o1_500.gif`);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "ask"
}