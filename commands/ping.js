import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Get ping of the bot')
  export async function execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    await interaction.editReply(`\`Websocket heartbeat:\` ${interaction.client.ws.ping}ms.\n\`Roundtrip latency:\` ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
}