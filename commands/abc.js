module.exports.run = async(bot,message,args)=>{
    message.channel.send("abc has run")
}

module.exports.help = {
    name: `abc`,
    desc: `ping of the bot`,
    // aliases: `p` 

}