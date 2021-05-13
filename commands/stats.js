const Discord = require('discord.js');
var osu = require('node-os-utils')
var cpu = osu.cpu

exports.run = (client, message, args) => {
    
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
  

    if(hours.length === 0) return hours +="0";
    if(minutes.length === 0) return minutes +="0";

    
    cpu.usage().then(info => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle(`Waterfall Stats`)
        .addField('Websocket Latency:',`**${Math.round(client.ws.ping)}**`)
        .addField('Uptime:',`**${time(days)}:${time(hours)}:${time(minutes)}:${time(seconds)}**`)
        .addFields(
            {name: 'Memory Usage:', value: `**${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB**`, inline: true},
            {name: 'Cpu Usage:', value: `**${info}%**`, inline: true}            
        )
        .setColor('59bcee')

    message.channel.send(embed);
        });
}

function time(e){
    if(/^\d$/.test(e)){
        return '0' + e;
    }else{
        return e;
    }
}