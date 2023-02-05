import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("info")
    .setDescription("Information about this discord bot.");
export async function execute(interaction) {
    await interaction.reply("Star bot with all your needs!");
}