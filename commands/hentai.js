//hello pachu, if you ever see this. Don't worry this is for a different server, you can't actually use this on your server :)
const Discord = require("discord.js");
const { getPost, getImage } = require('random-reddit')

exports.run = async (client, message, args) => {

    if(message.guild.id === '836707588640997456' || message.guild.id === '742732244673626234'){
            const image = await getImage('hentai')
            message.channel.send(image)
    }

}
