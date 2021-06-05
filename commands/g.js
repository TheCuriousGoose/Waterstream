const  googleIt = require('google-it')
const translate = require('@vitalets/google-translate-api');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send('Please use `' + client.config.prefix + 'g <The thing you want to google>`')
    
    var search = message.content.replace(`${client.config.prefix}g `,'');

    googleIt({'query': search, 'disable-console': true }).then(results => {
        translate(results[0].snippet, {to: 'en'}).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setURL(results[0].link)
            .setTitle(results[0].title)
            .addField('Snippet', res.text)
            .setTimestamp()
            .setFooter('GooseDevelopment | Waterstream', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/water-stream-courtney-crane.jpg');
            message.channel.send(embed)
          }).catch(e => {
              message.channel.send('Something went wrong. Please try again')
            
          })
    });
}
