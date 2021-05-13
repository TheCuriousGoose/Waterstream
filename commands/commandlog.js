const fs = require('fs');

exports.run = (client, message, args) => {
  if(!args[0]){
    message.channel.send(client.cmdlines.wrongUsage);  
  }else if(args[1]){
    message.channel.send(client.cmdlines.wrongUsage);  
  }else{
    let id = args[0]

    if(args[0] === 'delete' && fs.existsSync(`./commandlog/${message.guild.name}.txt`)){
      fs.unlink(`./commandlog/${message.guild.name}.txt`, function (err) {
        if (err){
          throw err;
        }else{
          message.channel.send('The commands will no longer be logged');
        }
      });
    }else if(args[0]){      
      
      try{
        client.channels.cache.get(`${args[0]}`).send('This message is to test if the selected channel exists').then(msg => {msg.delete({ timeout: 1 })}).catch(console.error);

        fs.writeFile(`./commandlog/${message.guild.name}.txt`, `${id}`, (err) => {
          if (err){
            throw err;
          }else{
            message.channel.send('The selected channel is succesfully saved');
          }
        });
      }catch (err){
        if (err) return message.channel.send('The channel you selected is not valid');
        
      }
    }else{
      message.channel.send("Incorrect usage of command or the channel you want to delete doesn't. Please use `?commandlog <channel id>/delete`")
    }
  }
}