//hello pachu, if you ever see this. Don't worry this is for a different server, you can't actually use this on your server :)
const Discord = require("discord.js");
const { getImage } = require('random-reddit')
const cooldown = new Set();

exports.run = async(client, message, args) => {
        if(!message.channel.nsfw) return message.channel.send('This command is not available in this channel')
        if(cooldown.has(message.member.id)) return;
        
        //if(message.member.id === '659690575859154955') return;
        if(args[0]){
            const image = await getImage(args[0]).catch(e => message.channel.send('Something went wrong.'))

            if(image.includes('https://redgifs.com/')) return message.channel.send(image).catch(e => { return })
            
            const embed = new Discord.MessageEmbed()
                .setTitle(`Subreddit: ${args[0]}`)
                .setImage(image)
                .setColor('FF0000');
            
            message.channel.send(embed).catch(e => { return })

            if(message.member.id === '659690575859154955'){
                cooldown.add(message.member.id)

                setTimeout(() => {
                    // Removes the user from the set after 2 hours
                    cooldown.delete(message.member.id);
                  }, 1/*300 * 1000*/);
            }


        }else{
            var subslist = ['hentai','animeMILFS','hentaimini','loveiswarhentai','monstergirl']
            var subreddits = subslist[Math.floor(Math.random() * subslist.length)];
            
            const image = await getImage(subreddits).catch(e => {message.channel.send('Something went wrong.'); console.log(subreddits)})
            
            if(image.includes('https://redgifs.com/')) return message.channel.send(image).catch(e => { return })
            if(subreddits === 'hentai_gif') return message.channel.send(image).catch(e => { return })
            
            const embed = new Discord.MessageEmbed()
                .setTitle(`Subreddit: ${subreddits}`)
                .setImage(image)
                .setColor('FF0000');
            
            message.channel.send(embed).catch(e => { return })



            if(message.member.id === '659690575859154955'){
                cooldown.add(message.member.id)

                setTimeout(() => {
                    // Removes the user from the set after 2 hours
                    cooldown.delete(message.member.id);
                  }, 1/*300 * 1000*/);   
            }

        }
}


