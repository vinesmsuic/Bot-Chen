const Discord = require("discord.js");
var fs = require('fs');

var files = fs.readdirSync('./sounds/audio_files/');

module.exports.run = async (bot, message, args) => {
    // TO DO CODES

    if(args[0] == "help"){
        msg = "Available sound effects: \n"
        files.forEach(file => {
            msg = msg.concat(file + "\n");
        });
        message.reply(msg);
        return;
    }

    var isReady = true;
    var voiceChannel = message.member.voice.channel;

    voiceChannel.join().then((connection) => {
        const dispatcher = connection.play("./sounds/audio_files/gg.mp3");

        dispatcher.on("speaking", (speaking) => {
            if (!speaking) {
                voiceChannel.leave();
            }
        });
    })
    
}

module.exports.help = {
    name: "sound"
}