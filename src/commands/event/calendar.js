const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports =  {
    name: 'e-calendar',
    description: 'Sends KadaDiscord\'s Event Calendar!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    //options: Object[],
    //deleted: true,

    callback: (client, interaction) => {
        const embed = new EmbedBuilder()
            .setTitle('This month\'s KadaDiscord Event Calendar')
            //.setDescription('This is an embed!')
            .setColor('#00497A')
            .setImage('https://media.discordapp.net/attachments/867750495014879246/1113053055936626778/JUNE_2023.png?width=840&height=473')

            const prev = new ButtonBuilder()
            .setCustomId('prev')
            .setLabel('Previous month')
            .setStyle(ButtonStyle.Primary);

            const next = new ButtonBuilder()
                .setCustomId('next')
                .setLabel('Next month')
                .setStyle(ButtonStyle.Primary); 

            const row = new ActionRowBuilder()
                .addComponents(prev, next);
            
        interaction.reply({ embeds: [embed], components: [row] });
    }
}