import {Client,IntentsBitField} from 'discord.js'


const TOKEN = "MTE5NDQ3NDgwNjA3MTAwOTM2MA.G-9p6o.iHpO2yoy2XpJLLBeyZxb_MRHp6tAyFRi0bulpc"

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

client.on('messageCreate',(msg)=>{
    console.log("Received message -----\nAuthor:"+msg.author.username+"\nContent:"+msg.content)
    if(msg.content.toLowerCase()==="hello"){
        msg.reply("Hello my friend!")
    }

})