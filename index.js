//Get needed libaries
const { time } = require("console");
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

//getting other needed stuff
const client = new Discord.Client();
const config = require("./config.json");

//stream notification stuff
var hours = 2;
const recentStreamNotification = new Set();

//assings config to client
client.config = config;

//Getting the command handeler
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
client.extra = new Enmap();

//Getting all the commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
  console.log(`Done loading in ${files.length} commands... loading in extra features...`);
});

//Getting all the extra features
fs.readdir("./extra/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./extra/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load ${commandName}`);
    client.extra.set(commandName, props);
  });
  console.log(`Done loading ${files.length} extra features`)
});

//Handels the Stream message for pachu and people with the Upstreamer role
client.on("presenceUpdate", (oldPresence, newPresence) => {
  if (!newPresence.activities) return false;

  if(!newPresence.member.roles.cache.has(config.stream.role)) return false;
  
  newPresence.activities.forEach(activity => {
      if (activity.type == "STREAMING") {
        if (recentStreamNotification.has(newPresence.member.id)) {
          return;
        }else{
          const t = new Date();
          var time = t.toLocaleString('fr-CA', { timeZone: 'America/Los_Angeles'});
  
          let twitchname = activity.url.replace('https://www.twitch.tv/','');
  
          const notification = new Discord.MessageEmbed()
          .setColor('#6441a5')
          .setTitle(`${activity.url}`)
          .setURL(`${activity.url}`)
          .setAuthor(`${newPresence.user.username} is now live!`)
          .setDescription(`${activity.details}`)
          .addFields(
            { name: `${newPresence.user.username} is playing`, value: `${activity.state}`, inline: true },
            { name: 'Stream Started at', value: `${time}`, inline: true },)
          .setImage(`https://static-cdn.jtvnw.net/previews-ttv/live_user_${twitchname}-320x180.jpg"`)
          .setTimestamp()
          .setFooter('GooseDevelopment | Waterstream', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/water-stream-courtney-crane.jpg');
      
          if(newPresence.member.id === '815419427654074398'){
            //gets needed channel
            const channel = client.channels.cache.get(config.stream.pachuchannel)
            //sends notification in channel
            channel.send(notification);
            //adds role

            //stores userid in recentstreamnotification
            recentStreamNotification.add(newPresence.member.id);
            //sets timeout
            setTimeout(() => {
              // Removes the user from the set after 2 hours
              recentStreamNotification.delete(newPresence.member.id);
            }, hours*60*60*1000);
          }else{
            
            //gets needed channel
            const channel = client.channels.cache.get(config.stream.channel)
            //sends notification in channel
            channel.send(notification);
            //adds role
            //add userid to recentstreamnotification
            recentStreamNotification.add(newPresence.member.id);
            //sets timeout
            setTimeout(() => {
              // Removes the user from the set after 2 hours
              recentStreamNotification.delete(newPresence.member.id);
            }, hours*60*60*1000);
          }
        }
      }
  });
});

client.on("message", message => {
  
  if(message.channel.id === '841728830784012290'){
    const channel = client.channels.cache.get('818694681571098657')
    channel.startTyping();
    setTimeout(() => {
      channel.stopTyping();
    
      channel.send(message.content);
    }, message.content.length * 75)

  }
})

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Just doing my work =D`);
});

client.login(config.token);