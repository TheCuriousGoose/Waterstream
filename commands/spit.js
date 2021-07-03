let cooldown = new Set()

exports.run = (client, message, args) => {
  
  if(!message.channel.nsfw) return;
  if(cooldown.has(message.member.id)) return message.channel.send("You're on a spit cooldown");
  
  if(!args[0]){
    message.channel.send('Please provide a valid user you want to spit on');
  /*}else if(args[1]){
    message.channel.send('Too many arguments');*/
  }else if(args[0] === 'on'){
    const user = message.mentions.users.first();
    if(!message.guild.member(message.mentions.users.first())){
      message.channel.send('Please provide a valid user to spit on');
    }else{
      message.channel.send(`*spits* 💦 ${user} you degenerate fuck!!`)
	  cooldown.add(message.member.id);
	  setTimeout(() => {
		  cooldown.delete(message.member.id);
	  }, 60 * 1000);
    }
  }else{
	  return;
  }
}