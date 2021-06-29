const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "gif",
  aliases: ["GIF"],
  cooldown: 8,
  description: "**Gif Commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    //.setThumbnail(`https://cdn.discordapp.com/avatars/837016151795564544/6813aeeea7e579ff5666bc9e902cb4c2.png?size=1024 `)
    .setTitle(`**Qeqe Gif**`)
    .setDescription(`
>>> \`boy\` - \`girl\` - \`baby\`
\`couple\` - \`anime\`

[Support](https://discord.gg/6MGtNxJNBk)
[Invite](https://discord.com/api/oauth2/authorize?client_id=837016151795564544&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("PURPLE");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
