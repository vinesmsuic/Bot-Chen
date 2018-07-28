    const Discord = require("discord.js");


    module.exports.run = async (bot, message, args) => {
        
        let songname = args.join(" ");

    if(!args[0]){
        songname = "Darude - Sandstorm";
    }    

    let music = 
(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀♫ ` + songname + ` ♫⠀⠀⠀⠀
───────⚪──────────────────────────────────────
⠀▐▐ ⠀►▏ ⠀⠀──○─ 🔊 ⠀₁:₂₅ / ₃:₅₀ ⠀⠀
`);

    let formattedmusic = "```"+music+"```";
        
        message.channel.send(formattedmusic);
    }
    
    module.exports.help = {
        name: "fakemusic"
    }