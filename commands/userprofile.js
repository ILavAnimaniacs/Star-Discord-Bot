import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!")
    .addUserOption((option) =>
        option.setName("user").setDescription("User to get information about.")
    );
/**
 *
 * @param {import("discord.js").ChatInputCommandInteraction} interaction
 */
export async function execute(interaction) {
    let user = interaction.options.getUser("user") || interaction.user;
    let guildMember = await interaction.guild.members.fetch(user.id);
    let embed = new EmbedBuilder()
        .setTitle("User Information")
        .addFields(
            {
                name: "Player Name",
                value: `${guildMember.displayName} (${user.tag})`,
            },
            { name: "Join Date", value: String(guildMember.joinedAt) },
            { name: "Creation Date", value: String(user.createdAt) }
        )
        .setColor(0xf1c40f)
        .setThumbnail(user.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: "Have a nice day!" });
    await interaction.reply({ embeds: [embed] });
}