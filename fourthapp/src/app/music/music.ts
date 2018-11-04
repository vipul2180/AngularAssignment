import { generate } from "rxjs";

export interface Ialbums{
    albumId: String,
    title: String,
    year: number,
    cover: String,
    price: number
}

export interface Iartists{
    id: number,
    name: String,
    cover: String,
    bio: String,
    albums: Ialbums[],
    genre: String
}


export interface Imusic {
    _id: String,
    artists: Iartists[]
}