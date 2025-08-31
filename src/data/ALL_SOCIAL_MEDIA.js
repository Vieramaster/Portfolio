import GithubIco from "../components/icons/social_icons/GithubIco.astro";
import InstagramIco from "../components/icons/social_icons/InstagramIco.astro";
import LinkedInIco from "../components/icons/social_icons/LinkedInIco.astro";
import TelegramIco from "../components/icons/social_icons/TelegramIco.astro";
import DiscordIco from "../components/icons/social_icons/DiscordIco.astro";

const ALL_SOCIAL_MEDIA = [
  { Icon: GithubIco, link: "https://github.com/Vieramaster", label: "GitHub" },
  {
    Icon: InstagramIco,
    link: "https://www.instagram.com/martin_viera90/",
    label: "Instagram",
  },
  {
    Icon: LinkedInIco,
    link: "https://www.linkedin.com/in/rodrigo-martin-viera-royer",
    label: "LinkedIn",
  },
  { Icon: TelegramIco, link: "https://t.me/vieramaster", label: "Telegram" },
  {
    Icon: DiscordIco,
    link: "https://discord.com/users/viera#4098",
    label: "Discord",
  },
];

export default ALL_SOCIAL_MEDIA;
