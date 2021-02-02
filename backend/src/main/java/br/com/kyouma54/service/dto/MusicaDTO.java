package br.com.kyouma54.service.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;

@Data
public class MusicaDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String foto;
    private String nome;
    private String tempoDaMusica;
    private String genero;
    private ZonedDateTime dataDeLancamento;
    private Long numeroDeVotacoes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTempoDaMusica() {
        return tempoDaMusica;
    }

    public void setTempoDaMusica(String tempoDaMusica) {
        this.tempoDaMusica = tempoDaMusica;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public ZonedDateTime getDataDeLancamento() {
        return dataDeLancamento;
    }

    public void setDataDeLancamento(ZonedDateTime dataDeLancamento) {
        this.dataDeLancamento = dataDeLancamento;
    }

    public Long getNumeroDeVotacoes() {
        return numeroDeVotacoes;
    }

    public void setNumeroDeVotacoes(Long numeroDeVotacoes) {
        this.numeroDeVotacoes = numeroDeVotacoes;
    }
}
