import type { Social } from "@/types/social";
import Instagram from "@/assets/svg/instagram.svg"
import Facebook from "@/assets/svg/facebook.svg"

export const SOCIAL: Social[] = [
    {
        id: "instagram",
        name: "Instagram",
        url: "https://instagram.com/infoLaVelada",
        label: "Visitar perfil de CAMI en Instagram",
        image: {
            logo: Instagram,
            width: 24,
            height: 24,
        },
    },
    {
        id: "facebook",
        name: "Facebook",
        url: "https://github.com/midudev/la-velada-web-oficial",
        label: "Visitar repositorio de la Velada Oficial en GitHub",
        image: {
            logo: Facebook,
            width: 24,
            height: 24,
        },
    },
]