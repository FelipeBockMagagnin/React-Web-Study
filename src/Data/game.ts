export interface Game {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    rating_top: number
    ratings: Rating[]
    ratings_count: number
    reviews_text_count: number
    added: number
    added_by_status: AddedByStatus
    metacritic: number
    playtime: number
    suggestions_count: number
    user_game: object
    reviews_count: number
    saturated_color: string
    dominant_color: string
    genres: Genre
}

export interface GameResponse {
    count: number
    next: string
    previus: string
    results: Game[]
    seo_title: string
    seo_keywords: string
    seo_h1: string
    noindex: boolean
    nofollow: boolean
    description: string
}

export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    released: string;
    tba: boolean;
    updated: Date;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: Reactions;
    added: number;
    added_by_status: AddedByStatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game?: any;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    parent_platforms: ParentPlatforms[];
    platforms: Platforms[];
    stores: Stores[];
    developers: Developer[];
    genres: Genre[];
    tags: Tag[];
    publishers: Publisher[];
    esrb_rating: EsrbRating;
    clip: Clip;
    description_raw: string;
}

interface Stores {
    id: number
    ulr: string
    store: Store[]
}

interface Store {
    id: number
    name: string
    slug: string
    domain: string
    games_count: number
    image_background: string
}

interface Platforms {
    platform: Platform
    released_at: string
}

interface Platform {
    id: number
    name: string
    slug: string
    image: string
    year_end: string
    year_start: string
    games_count: number
    image_background: string
}

interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

interface Reactions {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    10: number;
    11: number;
    12: number;
    16: number;
}

interface AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}

interface ParentPlatforms {
    platform: ParentPlatform[];
}

interface ParentPlatform {
    id: number
    name: string
    slug: string
}

interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}

interface Publisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

interface EsrbRating {
    id: number;
    name: string;
    slug: string;
}

interface Clips {
    320: string;
    640: string;
    full: string;
}

interface Clip {
    clip: string;
    clips: Clips[];
    video: string;
    preview: string;
}



