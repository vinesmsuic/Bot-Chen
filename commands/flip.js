const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    let result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
            coinside = "HEADS（正面）";
    	} else if (result == 2) {
            coinside = "TAILS（反面）";
        }

        let embedcoin = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#2DDECF")
        .setThumbnail(message.author.avatarURL)
        .addField("The coin landed on...",coinside + "!");
        
        message.channel.send(embedcoin);



}

module.exports.help = {
    name: "flip"
}