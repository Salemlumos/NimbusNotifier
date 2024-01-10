import * as dotenv from "dotenv";
import {REST,Routes} from "discord.js";

dotenv.config()

const commands = [
    {
        name:"hey",
        description:"Says hello to you",
    }
]


//guild 1098086813681328178
//client(bot) 1194474806071009360

const rest = new REST({version:"10"}).setToken(process.env.TOKEN)

const setUpCommands = async ()=>{
    try {
        console.log(`Registering commands`)
        await rest.put(
            Routes.applicationGuildCommands(process.env.BOTID,
            process.env.SERVERID),{body:commands}
            )
        
        console.log(`Commands was sucessfully registered`)
    } catch (error) {
        console.log("There was an error while registering the commands:"+error)
    }
}

setUpCommands()