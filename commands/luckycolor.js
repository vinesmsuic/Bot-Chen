const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {


    let color=''; 
    while(color.length<6){ color=Math.floor(Math.random()*16777215).toString(16);} 
    luckycolor = '#'+color; 

    let colorembed = new Discord.MessageEmbed()
    .setColor(luckycolor)
    .setTitle("Your Lucky Color is :")
    .setDescription(luckycolor.toUpperCase())


    message.channel.send(colorembed);

}

module.exports.help = {
    name: "luckycolor"
}