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
  .addField(`New York, New York, πΊπΈ NA:`,` ${timeUSYN}`)
  .addField(`Chicago, Illinois, πΊπΈ NA:`,` ${timeUSCH}`)
  .addField(`Los Angeles, California, πΊπΈ NA:`,` ${timeUSLA}`)
  .addField(`Sydney, Australia, π¦πΊ AU:`,` ${timeAUS}`)
  .addField(`Amsterdam, Netherlands, πͺπΊ EU:`,` ${timeNL}`)
  .addField(`London, United Kingdom, π¬π§ EU:`,` ${timeUK}`)
  .addField(`Tokyo, Japan, π―π΅ AS`,` ${timeJP}`)

  message.channel.send(Embed) 
  }