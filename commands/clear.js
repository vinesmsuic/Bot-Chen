const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof. You dont have such permission.");
    if(!args[0]) return message.channel.send("how many you want me to delete? (╯°□°）╯︵ ┻━┻");
    if(args[0] > 100) return message.channel.send("Too Tiring. I can only clear 100 each time.")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
    });
}

module.exports.help = {
    name: "clear"
}