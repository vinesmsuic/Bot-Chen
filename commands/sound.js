const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    // TO DO CODES

    var isReady = true;
    var voiceChannel = message.member.voice.channel;


    const playAudio = async (audioQueue, connection) => {
        const dispatcher = connection.play(audioQueue.pop(), {
            volume: 1,
        });
        // When audio finished playing
        dispatcher.on("finish", () => {
            dispatcher.destroy();
            if (audioQueue.length > 0) {
                playAudio(audioQueue, connection);
            } else {
                connection.channel.leave();
            }
        });
    };

    voiceChannel
    .join()
    .then((connection) => {
        const dispatcher = connection.play("./sounds/gg.mp3");

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