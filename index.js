//Get needed libaries
const colors = require('colors');
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const Twitter = require('twit');
const url = require('url');
const querystring = require('querystring');


//getting other needed stuff
const client = new Discord.Client();
const config = require("./config.json");

//stream notification stuff
var hours = 2;
const recentStreamNotification = new Set();

//Things for !timer
var counter = require('./commandevents/timercounter.js');

//assings config to client
client.config = config;

//twitter setup
const twitterConf = {
  consumer_key: config.twitter.TWITTER_CONSUMER_KEY,
  consumer_secret: config.twitter.TWITTER_CONSUMER_SECRET,
  access_token: config.twitter.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.twitter.TWITTER_ACCESS_TOKEN_SECRET
}
const twitterClient = new Twitter(twitterConf);
const dest = '820012263863615488';

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
    console.log(colors.gray(`Loading command ${commandName}`));
    client.commands.set(commandName, props);
  });
  console.log(colors.green(`Done loading in ${files.length} commands... loading in extra features...`));
});

//Getting all the extra features
fs.readdir("./extra/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./extra/${file}`);
    let commandName = file.split(".")[0];
    console.log(colors.gray(`Loading ${commandName}`));
    client.extra.set(commandName, props);
  });
  console.log(colors.green(`Done loading ${files.length} extra features`))
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
            }, 1);
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

  }else if(message.channel.id === ''){
    const channel = client.channels.cache.get('855025078381969448')
    channel.send(message.content)
  }

});

var timer = setInterval(function() {
  counter.add();
  if(counter.count === 13){
    clearInterval(timer)
  }
}, 20 * 1000)

timer;

//manages incoming tweets and sends them to the twitter channel
/*const stream = twitterClient.stream('statuses/filter', {
  follow: '1353447772394057734',
});

stream.on('tweet', tweet => {
  console.log(tweet);
  if(tweet.retweeted === true){
    const twitterMessage = `${tweet.user.name} retweeted: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(dest).send(twitterMessage);
  }else if(tweet.is_quote_status === true){
    const twitterMessage = `${tweet.user.name} retweeted ${tweet.quoted_status.name} and tweeted: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(dest).send(twitterMessage);
  }else if(tweet.in_reply_to_status_id !== null){
    return;
  }else{
    if(tweet.user.id !== 1353447772394057734) return;
    
    const twitterMessage = `${tweet.user.name} tweeted: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
    client.channels.cache.get(dest).send(twitterMessage);
  }
  return false;
});
*/



client.on('guildMemberAdd', member => {
  if(member.guild.id === '818694681571098654'){
    if(member.bot) return;
  
    const channel = client.channels.cache.get('818694681571098657');
  
    var randomjoin = ["has joined the party!","just joined. Everyone, look busy!","we hope you brought pizza.","has spawned in the server.","just arrived. Seems OP - please nerf.", "decided to look what's happening here!",
    "wants to have some fun!", "made the choose to join this peaceful place","We hope you brought some choccy milk", "  wants to join the vibe"]
  
    channel.send(`${member} ${randomjoin[Math.floor(Math.random() * randomjoin.length)]}`);
  }


});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity(`Just doing my work =D`);
});

client.login(config.token);