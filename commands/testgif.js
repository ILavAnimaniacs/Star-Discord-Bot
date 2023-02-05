import config from "../config.json" assert { type: "json" };
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

const { giphyAPIKey } = config;

export const data = new SlashCommandBuilder()
    .setName("testgif")
    .setDescription("test gif");
export async function execute(interaction) {
    await interaction.deferReply();

    const limit = 25;
    const offset = Math.floor(Math.random() * 50) * limit;
    const objKey = Math.floor(Math.random() * limit);
    const start = performance.now();
    const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPIKey}&q=hug&limit=${limit}&offset=${offset}&rating=g&lang=en`
    );
    const json = await res.json();
    const stop = performance.now();
    const duration = Number((stop - start).toFixed(3));
    const pageInfo = json.pagination;
    const metadata = json.meta;
    const giphyObj = json.data[objKey];
    const title = giphyObj.title;
    const url = giphyObj.images.original.url;

    console.log({ duration, pageInfo, metadata });

    const embed = new EmbedBuilder()
        .setTitle(title)
        .setImage(url)
        .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
}
