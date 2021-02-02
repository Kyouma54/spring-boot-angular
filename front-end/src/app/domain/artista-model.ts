import { IAlbum } from "./album-model";

export interface IArtista {
    id?: number;
    foto?: string;
    nome?: string;
    facebook?: string;
    instagram?: string;
    wikipedia?: string;
    twitter?: string;
    biografia?: string;
    albuns?: IAlbum[];
}

export class Artista implements IArtista {
    constructor(
       public id?: number,
       public foto?: string,
       public nome?: string,
       public facebook?: string,
       public instagram?: string,
       public wikipedia?: string,
       public twitter?: string,
       public biografia?: string,
       public albuns?: IAlbum[]
    ) {}
}