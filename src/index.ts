import Botyo from "botyo";
import { PersistenceBundle } from "botyo-bundle-persistence";
import { InstagramBundle } from "botyo-bundle-instagram";
import PingCommand from "botyo-command-ping";
import SpotifyCommand from "botyo-command-spotify";
import QuoteCommand from "botyo-command-quote";
import ShowMeCommand from "botyo-command-showme";
import YouTubeCommand from "botyo-command-youtube";
import ReverseImageSearchCommand from "botyo-command-reverse-image-search";

const bot = Botyo.builder()
    .configuration("config.yaml")
    .registerBundle(PersistenceBundle)
    .registerBundle(InstagramBundle)
    .registerModule(PingCommand)
    .registerModule(QuoteCommand)
    .registerModule(ReverseImageSearchCommand)
    .registerModule(ShowMeCommand)
    .registerModule(SpotifyCommand)
    .registerModule(YouTubeCommand)
    .build();

bot.start();

const bye = () => {
    bot.stop()
        .then(() => process.exit(0))
        .catch(() => process.exit(1));
};

process
    .on('SIGTERM', bye)
    .on('SIGINT', bye);
