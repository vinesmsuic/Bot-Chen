const Discord = require("discord.js");
var fs = require('fs');

var files = fs.readdirSync('./sounds/audio_files/');

module.exports.run = async (bot, message, args) => {
    // TO DO CODES

    var isReady = true;

    if(args[0])
    {
        if(args[0] == "help"){
            msg = "The available sound effects are: \n"
            files.forEach(file => {
                msg = msg.concat(file + "\n");
            });
            message.reply(msg);
            return;
        }
        else if(files.includes(args[0]) && isReady == true)
        {
            var voiceChannel = message.member.voice.channel;

            if(voiceChannel)
            {
                voiceChannel.join().then((connection) => {
                    const dispatcher = connection.play("./sounds/audio_files/".concat(args[0]),{
                        volume: 0.5,
                    });
    
                    dispatcher.on("speaking", (speaking) => {
                        isReady = false;
                        
                        if (!speaking) {
                            voiceChannel.leave();
                            isReady = true;
                        }
                    });
                })
            }
            else
            {
                message.reply("Join a voice channel first!");
                return;
            }
        }
        else if(isReady == false)
        {
            message.reply("I am busy. Someone is using me to play sounds. Try again later :-)");
            return;
        }
        else
        {
            msg = "No file named " + args[0] + ", Please use `.sound help` to check the available sounds."
            message.reply(msg);
            return;
        }
    }


    
}

module.exports.help = {
    name: "sound"
}