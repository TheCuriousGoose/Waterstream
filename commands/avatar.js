const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let member = message.mentions.users.first() || message.author

  let avatar = member.avatarURL({ format: 'png', dynamic: true, size: 1024 });


  const embed = new Discord.MessageEmbed()
  .setTitle(`${member.username}'s avatar`)
  .setImage(avatar)
  .setColor("RANDOM")
  
  message.channel.send(embed);
}