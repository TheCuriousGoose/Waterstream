const Discord = require('discord.js')

exports.run = (client, message, args) => {
  const t = new Date();
  
  var timeUSCH = t.toLocaleString('fr-CA', { timeZone: 'America/Chicago'});
  var timeUSLA = t.toLocaleString('fr-CA', { timeZone: 'America/Los_Angeles'});
  var timeUSYN = t.toLocaleString('fr-CA', { timeZone: 'America/New_York'});
  var timeAUS = t.toLocaleString('fr-CA', { timeZone: 'Australia/Sydney'});
  var timeNL = t.toLocaleString('fr-CA', {timeZone: 'Europe/Amsterdam'});
  var timeUK = t.toLocaleString('fr-CA', {timeZone: 'Europe/London'});
  var timeJP = t.toLocaleString('fr-CA', {timeZone: 'Asia/Tokyo'});	

  const Embed = new Discord.MessageEmbed()
  .setColor('25CAA0')
  .setTitle('Time')
  .addField(`New York, New York, 🇺🇸 NA:`,` ${timeUSYN}`)
  .addField(`Chicago, Illinois, 🇺🇸 NA:`,` ${timeUSCH}`)
  .addField(`Los Angeles, California, 🇺🇸 NA:`,` ${timeUSLA}`)
  .addField(`Sydney, Australia, 🇦🇺 AU:`,` ${timeAUS}`)
  .addField(`Amsterdam, Netherlands, 🇪🇺 EU:`,` ${timeNL}`)
  .addField(`London, United Kingdom, 🇬🇧 EU:`,` ${timeUK}`)
  .addField(`Tokyo, Japan, 🇯🇵 AS`,` ${timeJP}`)

  message.channel.send(Embed) 
  }