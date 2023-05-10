require("dotenv").config()
const fs = require("fs");

const {Client,Collection,MessageEmbed}= require("discord.js")

const bot= new Client({
    intents: 32767
})

bot.Commands = new Collection();

//command handler
const CommandFiles = fs
.readdirSync('./commands')
.filter((file) => file.endsWith('.js'));

// command list
for( const file of CommandFiles ) {
    const commandList = require(`./commands/${file}`)
    bot.Commands.set(commandList.help.name, commandList)
    bot.Commands.set(commandList.help.aliases, commandList)
   }
   console.log(`${CommandFiles.length} files loaded in commands folder`)

bot.on("ready",()=>{
    console.log(`BOT ${bot.user.tag} is online`);
    bot.user.setActivity("You",{type:"LISTENING"})
})

bot.on("messageCreate",async(message)=>{
    if(message.author.bot) return

    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1)
    
    var prefix=".";

    if(message.content.startsWith(prefix)){

        let cmdFile = bot.Commands.get(cmd.slice(prefix.length))
        if(cmdFile){
            cmdFile.run(bot,message,args);
        }
        
        

        
    }
})

bot.login(process.env.KEY2)