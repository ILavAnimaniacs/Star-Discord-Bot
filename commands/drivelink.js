import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('drivelink')
	.setDescription('SVTFOE Database');
export async function execute(interaction) {
	await interaction.reply('https://drive.google.com/drive/folders/1M1ZwIPYTnIQb-AFFK6-wvxMO_EEZLT3G');
}
