import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('hug')
    .setDescription('Hug Someone')
    .addUserOption(option => option
        .setName('user')
        .setDescription('The user you want to hug')
        .setRequired(true)
    );
export async function execute(interaction) {
    return interaction.reply(`${interaction.user} hugs ${interaction.options.getUser('user')}`);
}