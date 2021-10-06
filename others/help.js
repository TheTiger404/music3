const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setTitle(`**Green Bot**`)
    .setDescription(`
    
**__🟢┇Moderator__**
> \`,lock\`  -  \`,unlock\`  -  \`,clear\`  -  \`,kick\`
> \`,ban\`  -  \`,unban\`  -  \`,sug\`

**__🟢┇Funny__**
> \`,slap\`  -  \`,kiss\`  -  \`,hug\`

**__🟢┇Gif__**
> \`,boy\`  -  \`,girl\`  -  \`,baby\`  -  \`,couple\`
> \`,anime\`  -  \`,cat\`  -  \`,cartoon\`  -  \`,smoke\`
> \`,sad\`  -  \`,neon\`

**__🟢┇Music__**
> \`,play\`  -  \`,skip\`  -  \`,skipto\`  -  \`,stop\`  
> \`,volume\`  -  \`,nowplaying\`  -  \`,shuffle\`
> \`,search\`  -  \`,resume\`  -  \`,remove\`
> \`,queue\`  -  \`,loop\`  -  \`,lyrics\`  -  \`,radio\`

**__🟢┇Everyone__**
> \`,invite\`  -  \`,support\`  -  \`,about\` - \`,ping\`
> \`,prefix\`  -  \`,uptime\`

**__🟢┇Link__**
> [Support](https://discord.gg/DCYsfe4AR6)
> [Invite](https://discord.com/api/oauth2/authorize?client_id=874800680269926420&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("GREEN");
   message.react("🍀")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
