package br.com.kyouma54.domain;

import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.List;

@Entity
@Table(name = "tb_musica")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Data
public class Musica implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy="increment")
    @Column(name = "id_musica")
    private Long id;

    @NotNull
    @Column(name = "ds_foto", nullable = false)
    private String foto;

    @NotNull
    @Column(name = "ds_nome", nullable = false)
    private String nome;

    @NotNull
    @Column(name = "ts_musica", nullable = false)
    private String tempoDaMusica;

    @NotNull
    @Column(name = "ds_genero", nullable = false)
    private String genero;

    @NotNull
    @Column(name = "dt_musica", nullable = false)
    private ZonedDateTime dataDeLancamento;

    @NotNull
    @Column(name = "nu_votacao", nullable = true)
    private Long numeroDeVotacoes;
}