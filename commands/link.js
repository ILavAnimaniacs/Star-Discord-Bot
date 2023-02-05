import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('link')
	.setDescription('Link to every season!');
export async function execute(interaction) {
	await interaction.reply('https://mega.nz/folder/D8AyFbiS#TpnOlAx2_IG1bzryIlg9Sw');
}
