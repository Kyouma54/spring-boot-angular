import { IMusica } from "./musica-model";

export interface IAlbum {
    id?: number;
    foto?: string;
    nome?: string;
    dataDeLancamento?: Date;
    musicas?: IMusica[];
}

export class Album implements IAlbum {
    constructor(
        public id?: number,
        public foto?: string,
        public nome?: string,
        public dataDeLancamento?: Date,
        public musicas?: IMusica[]
    ) {}
}