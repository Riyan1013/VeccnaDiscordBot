const {MessageEmbed} = require("discord.js")

module.exports.run = async(bot,message,args)=>{
    

        let username = message.author.username
        let userID = message.author.id
        let userAvatar = message.author.displayAvatarURL()

        let riyanID = 839874586908164146;
        let imranID = 292675388180791297;
        let joannaID = 806369784748572677;

        let color = "WHITE"

        if(message.author.id==riyanID) color = "GREEN"
        if(message.author.id==imranID) color = "PURPLE"
        if(message.author.id==joannaID) color = "PURPLE"

        const embed = new MessageEmbed()
        .setTitle(`Profile of ${username}`)
        .setColor(color)
        .setThumbnail(userAvatar)
        .setFooter(`UserID: ${userID}`)
        

        message.channel.send({embeds: [embed]});
    }


module.exports.help = {
    name: `profile`,
    desc: `ping of the bot`,
    aliases: `pr` 

}