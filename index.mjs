import * as dotenv from 'dotenv'
import {Client,IntentsBitField} from 'discord.js'

dotenv.config()
const TOKEN = process.env.TOKEN

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.login(TOKEN)

client.on('ready',(c)=>{
    console.log(`Bot started\nLogged in as ${c.user.tag}`)
})


client.on('interactionCreate',(interaction)=>{
    if(!interaction.isCommand()) return;
    if(interaction.commandName==="hey"){
        interaction.reply("Hello my friend!")
    }
})

client.on('messageCreate',(msg)=>{
    console.log("Received message -----\nAuthor:"+msg.author.username+"\nContent:"+msg.content)
    if(msg.content.toLowerCase()==="hello"){
        msg.reply("Hiiii!")
    }

})