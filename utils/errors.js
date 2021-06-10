const Discord = require("discord.js");
const fs = require("fs");
let colorp = require("../colorpreset.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setTitle("Insufficient Permission")
        .setColor(colorp.red)
        .addField("Permission needed", perm)
        .setThumbnail(`https://78.media.tumblr.com/bae6877a04f06d34ef9464806c4a7296/tumblr_obwoxdilyJ1u349h5o1_500.gif`);

    message.channel.send(embed).then(msg => msg.delete(5000));
}

module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setColor(colorp.red)
        .setTitle("Error")
        .addField(`${user} has perms`, perms)
        .setThumbnail(`https://78.media.tumblr.com/bae6877a04f06d34ef9464806c4a7296/tumblr_obwoxdilyJ1u349h5o1_500.gif`);

    message.channel.send(embed).then(msg => msg.delete(5000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription("You cannot ban a bot.")
        .setColor(colorp.red)
        .setThumbnail(`https://i.kym-cdn.com/photos/images/original/000/787/536/32d.gif`);

    message.channel.send(embed).then(msg => msg.delete(5000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription("Who do you want me to ban?")
        .setColor(colorp.red)
        .setThumbnail(`https://i.kym-cdn.com/photos/images/original/000/787/536/32d.gif`);

    channel.send(embed).then(msg => msg.delete(5000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription("Why you want me to ban him?")
        .setColor(colorp.red)
        .setThumbnail(`https://78.media.tumblr.com/bae6877a04f06d34ef9464806c4a7296/tumblr_obwoxdilyJ1u349h5o1_500.gif`);

    channel.send(embed).then(msg => msg.delete(5000));
}