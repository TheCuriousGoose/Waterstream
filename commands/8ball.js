exports.run = (client, message, args) => {
    let feetback = [
        "Concentrate and ask again.",
        "Don’t count on it.",
        "It is certain.It is decidedly so.",
        "Most likely.My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Outlook good.",
        "Reply hazy, try again.",
        "Signs point to yes.",
        "Very doubtful.",
        "Without a doubt.",
        "Yes.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Idk, I dont see the future.",
        "Hm...yes yes I could see it to be tr--wait nope nevermind.",
        "yes it looks lik- nevermind it's a hard no.",
        "Maybe yes, Maybe no.",
        "I'm just going to be honest I have no clue.",
        "Eeeuh am I suppose to know this stuff??",
        "I feel like it's a yes.",
        "I don't know what you are talking about.",
        "God please give me a break.",
        "No.",
        "You really think you have a chance.",
        "NOOOOOOOOOOOOOOOOOO, PLEASE GOD PLEASE NOOOOOOOOOOO",
        "It's likely, maybe.",
        "So it's a yes",
        "Sounds alright to me",
        "But do you need it.",
        "I am a imaginary ball! You think I know this stuff.",
        "Idk, you can try time travel. See it for your self.",
        "It's better if you don't hear the answer for your own good."
      ]

    message.channel.send(feetback[Math.round(Math.random() * feetback.length)]);


}