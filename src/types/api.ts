export interface VideosType {
    type: string
    video: VideoType
}

export interface VideoType {
    author: Author
    badges: any[]
    descriptionSnippet: string
    isLiveNow: boolean
    lengthSeconds: number
    movingThumbnails: MovingThumbnail[]
    publishedTimeText: string
    stats: Stats
    thumbnails: Thumbnail[]
    title: string
    videoId: string
}

export interface Author {
    avatar: Avatar[]
    badges: Badge[]
    canonicalBaseUrl: string
    channelId: string
    title: string
}

export interface Avatar {
    height: number
    url: string
    width: number
}

export interface Badge {
    text: string
    type: string
}

export interface MovingThumbnail {
    height: number
    url: string
    width: number
}

export interface Stats {
    views: number
}

export interface Thumbnail {
    height: number
    url: string
    width: number
}

/** VideoDetailType */``
export interface VideoDetailType {
    author: Author
    cards: Card[]
    category: string
    chapters: any[]
    description: string
    endScreen: EndScreen
    isLiveContent: boolean
    isLiveNow: boolean
    keywords: string[]
    lengthSeconds: number
    musics: Music[]
    publishedDate: string
    stats: Stats5
    superTitle: SuperTitle
    thumbnails: Thumbnail5[]
    title: string
    videoId: string
}

export interface Author {
    avatar: Avatar[]
    badges: Badge[]
    canonicalBaseUrl: string
    channelId: string
    stats: Stats
    title: string
}

export interface Stats {
    subscribers: number
    subscribersText: string
}

export interface Card {
    label: string
    link?: Link
    type: string
    video?: Video
}

export interface Link {
    displayDomain: string
    thumbnails: Thumbnail[]
    title: string
    url: string
}

export interface Video {
    lengthSeconds: number
    stats: Stats2
    thumbnails: Thumbnail2[]
    title: string
    videoId: string
}

export interface Stats2 {
    views: number
}

export interface Thumbnail2 {
    height: number
    url: string
    width: number
}

export interface EndScreen {
    items: Item[]
}

export interface Item {
    channel?: Channel
    type: string
    playlist?: Playlist
    video?: Video2
}

export interface Channel {
    avatar: Avatar2[]
    channelId: string
    description: string
    title: string
}

export interface Avatar2 {
    height: number
    url: string
    width: number
}

export interface Playlist {
    playlistId: string
    stats: Stats3
    thumbnails: Thumbnail3[]
    title: string
}

export interface Stats3 {
    videos: number
}

export interface Thumbnail3 {
    height: number
    url: string
    width: number
}

export interface Video2 {
    lengthSeconds: number
    stats: Stats4
    thumbnails: Thumbnail4[]
    title: string
    videoId: string
}

export interface Stats4 {
    views: number
}

export interface Thumbnail4 {
    height: number
    url: string
    width: number
}

export interface Music {
    attributes: Attributes
}

export interface Attributes {
    album: string
    artist: string
    licenses: string
    song: string
    writers: string
}

export interface Stats5 {
    comments: number
    likes: number
    views: number
}

export interface SuperTitle {
    items: string[]
}

export interface Thumbnail5 {
    height: number
    url: string
    width: number
}
