const { Pagination } = require('pagination.djs');
const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports = {
    name: 'event-calendars',
    description: 'See KadaDiscord\'s Event Calendars!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    //options: Object[],
    //deleted: true,

    callback: (client, interaction) => {
        //const descriptions = ['This is desc 1', 'this is desc 2'];
        const pagination = new Pagination(interaction);
        
        pagination.setButtonAppearance({
            first: {
                label: 'First',
                emoji: '',
                style: ButtonStyle.Secondary
            },
            prev: {
                label: 'Prev',
                emoji: '',
                style: ButtonStyle.Primary
            },
            next: {
                label: 'Next',
                emoji: '',
                style: ButtonStyle.Primary
            },
            last: {
                label: 'Last',
                emoji: '',
                style: ButtonStyle.Secondary
            }
        });
        const embeds = [];
        const calendars = process.env.CALENDARS.split(", ");

        for (const calendar of calendars) {
            const newEmbed = new EmbedBuilder()
                .setTitle('KadaDiscord Event Calendar')
                .setColor('#00497A')
                .setImage(calendar);
            
            embeds.push(newEmbed);
        }

        pagination.setEmbeds(embeds);
        // or if you want to set a common change in all embeds, you can do it by adding a cb.
        pagination.setEmbeds(embeds, (embed, index, array) => {
            return embed.setFooter({ text: `Page: ${index + 1}/${array.length}` });
        });
        pagination.render();
    }
}