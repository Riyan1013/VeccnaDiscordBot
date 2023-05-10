module.exports.run = async(bot,message,args)=>{
    message.channel.send(`📡 | **Response Time :  \`${bot.ws.ping} ms\` ❕**`);
}

module.exports.help = {
    name: `ping`,
    desc: `ping of the bot`,
    aliases: `p` 

}