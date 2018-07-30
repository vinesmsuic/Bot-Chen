    const Discord = require("discord.js");


    module.exports.run = async (bot, message, args) => {

        message.channel.send("http://gifdanceparty.giphy.com/");
        
    }
    
    module.exports.help = {
        name: "party"
    }