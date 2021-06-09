  const fs = require('fs');
const Discord = require("discord.js");

module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
    
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) {;
    //checks if command has to be logged
    if(message.channel.type === 'dm') return;
    
    // Our standard argument/command name definition.
    const args = message.content.split(/ +/);  
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.extra.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);

  }else{
      
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).split(/ +/);  
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    //checks if command has to be logged
    if(message.channel.type === 'dm') return;
	
	  if(fs.existsSync(`./commandlog/${message.guild.name}.txt`)){
      const id = fs.readFileSync(`./commandlog/${message.guild.name}.txt`)
      try{
        const Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${message.author.username}`)
        .setDescription(`Used the command ${command}`)
        .setTimestamp()
        client.channels.cache.get(String(id)).send(Embed);
      }catch (err){
        console.log(err)
      }
    }
    cmd.run(client, message, args);
  }
};