var counter = require('../commandevents/timercounter.js');

exports.run = (client, message, args) => {
    let light = ["⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜",
                 "⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜",
                 "⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜",
                 "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛"];
    var colours = "🟫🟪🟪🟪🟦🟦🟩🟩🟨🟨🟧🟧🟥";

    var roleIDs = {"purple":"852287620851695627","blue":"852287716778573825","green":"852287773938810881","yellow":"852287828137607207","orange":"852287881544466482","red":"852287936459177994"}

    const filter = (reaction, user) => {
        return ['🔲'].includes(reaction.emoji.name) && user.id === message.author.id;
    };      

    message.channel.send(`${light[counter.count]} \n${colours}`)
    .then(msg => {
        msg.react('🔲')
        msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '🔲') {
                if(counter.count === 0){
                    //brown
                    return;
                }else if(counter.count >= 1 && counter.count <= 3){
                    //purple
                    message.channel.send("You got purple!");
                    if (!message.author.roles.cache.has(roleIDs.purple)){
                        message.author.roles.add(roleIDs.purple)
                    } 
                    for(let i = 0; i < counter.count; i++){
                        setTimeout(() =>{
                            counter.remove();
                            msg.edit(`${light[counter.count]} \n${colours}`)
                        }, 500)
                    }
                    return;
                }else if(counter.count >= 4 && counter.count <= 5){
                    //blue
                    message.channel.send("You got blue!");
                    if (!message.author.roles.cache.has(roleIDs.blue)){
                        message.author.roles.add(roleIDs.bl)
                    } 
                    for(let i = 0; i < counter.count; i++){
                        setTimeout(() =>{
                            counter.remove();
                            msg.edit(`${light[counter.count]} \n${colours}`)
                        }, 500)
                    }
                    return;
                }else if(counter.count >= 6 && counter.count <= 7){
                    //green
                    message.channel.send("You got green!");
                    for(let i = 0; i < counter.count; i++){
                        setTimeout(() =>{
                            counter.remove();
                            msg.edit(`${light[counter.count]} \n${colours}`)
                        }, 500)
                    }
                    return;
                }else if(counter.count >= 8 && counter.count <= 9){
                    //yellow 
                    message.channel.send("You got yellow!");
                    for(let i = 0; i < counter.count; i++){
                        setTimeout(() =>{
                            counter.remove();
                            msg.edit(`${light[counter.count]} \n${colours}`)
                        }, 500)
                    }
                    return;
                }else if(counter.count >= 10 && counter.count <= 11){
                    //orange
                    message.channel.send("You got orange!");
                    for(let i = 0; i < counter.count; i++){
                        setTimeout(() =>{
                            counter.remove();
                            msg.edit(`${light[counter.count]} \n${colours}`)
                        }, 500)
                    }
                    return;
                }else if(counter.count === 12){
                    //red
                    message.channel.send("You got red!");
                    for(let i = 0; i < counter.count; i++){
                        setTimeout(() =>{
                            counter.remove();
                            msg.edit(`${light[counter.count]} \n${colours}`)
                        }, 500)
                    }
                    return;
                }else{
                    message.channel.send("The timer is dead, sorry you cannot revive them")
                }
            }   
        })
        .catch(collected => {
            msg.reactions.removeAll().catch(() => {});
        });


    });
}

