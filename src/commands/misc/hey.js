module.exports = {
    name: 'hey',
    description: 'Sends a hello!',
    // devOnly: Boolean,
    // testOnly: Boolean,
    //options: Object[],
    //deleted: true,

    callback: (client, interaction) => {
        interaction.reply( {content: `Hej, ${interaction.member.displayName}`, allowedMentions: { repliedUser: true }} );
    }
}