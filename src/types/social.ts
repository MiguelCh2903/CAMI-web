type SocialId = "x" | "instagram" | "github" | "youtube" | "facebook";

type SocialName = "X" | "Instagram" | "GitHub" | "Youtube" | "Facebook";

export interface Social {
    id: SocialId;
    name: SocialName;
    url: string;
    label: string;
    followers?: string;
    image: {
        logo: any;
        width: number;
        height: number;
    };
}