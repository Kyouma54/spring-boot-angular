export interface IMusica {
    id?: number;
    foto?: string;
    nome?: string;
    tempoDaMusica?: string;
    genero?: string;
    dataDeLancamento?: Date;
    numeroDeVotacoes?: number;

}

export class Musica implements IMusica {
    constructor(
        public id?: number,
        public foto?: string,
        public nome?: string,
        public tempoDaMusica?: string,
        public genero?: string,
        public dataDeLancamento?: Date,
        public numeroDeVotacoes?: number
    ) {}
}