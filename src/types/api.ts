// types/api.ts
export interface AuthorAvatar {
    height: number;
    width: number;
    url: string;
}

export interface Author {
    avatar: AuthorAvatar[];
    badges: string[];
    canonicalBaseUrl: string;
    channelId: string;
    title: string;
}

export interface MovingThumbnail {
    height: number;
    width: number;
    url: string;
}

export interface VideoStats {
    views: number;
}

export interface Video {
    author: Author;
    badges: string[];
    descriptionSnippet: string;
    isLiveNow: boolean;
    lengthSeconds: number;
    movingThumbnails: MovingThumbnail[];
    publishedTimeText: string;
    stats: VideoStats;
    thumbnails: MovingThumbnail[];
    title: string;
    videoId: string;
}

export interface ApiVideoItem {
    type: "video";
    video: Video;
}

export type VideoListResponse = ApiVideoItem[];
