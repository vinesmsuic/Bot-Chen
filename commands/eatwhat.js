const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    let foodList = ["pizza","mcdonold","KFC","Tam Jai"];

    let pickfood = Math.floor((Math.random() * foodList.length));


    //message.channel.send(foodList[pickfood][0]);

    //Using Embed to hide the original info
    let webembed = new Discord.RichEmbed()
    .setColor("#289EED")
    .addField("Food", foodList[pickfood][0])
    
    message.channel.send(webembed);
}

module.exports.help = {
    name: "[eatwhat]"
}
