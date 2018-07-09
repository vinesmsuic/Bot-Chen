const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        var quote = "";
        var rNum = Math.floor(Math.random()*6) + 1;

        switch(rNum){
            case 1:
            quote = "Hi, my name is jeff!";
            break;
            case 2:
            quote = "( ͡° ͜ʖ ͡°)";
            break;
            case 3:
            quote = "Meow~.";
            break;
            case 4:
            quote = "Honk Honk!";
            break;
            case 5:
            quote = "I am riding bike!"
            break;
            case 6:
            quote = "(づ｡◕‿‿◕｡)づ"
        }
        return message.channel.send(quote);
    }

module.exports.help = {
        name: "hi"
}