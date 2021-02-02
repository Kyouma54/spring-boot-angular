package br.com.kyouma54.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.istack.NotNull;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "tb_artista")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Data
public class Artista implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy="increment")
    @Column(name = "id_artista")
    private Long id;

    @NotNull
    @Column(name = "ds_foto", nullable = false)
    private String foto;

    @NotNull
    @Column(name = "ds_nome", nullable = false)
    private String nome;

    @NotNull
    @Column(name = "ln_facebook", nullable = false)
    private String facebook;

    @NotNull
    @Column(name = "ln_instagram", nullable = false)
    private String instagram;

    @NotNull
    @Column(name = "ln_wikipedia", nullable = false)
    private String wikipedia;

    @NotNull
    @Column(name = "ln_twitter", nullable = false)
    private String twitter;

    @NotNull
    @Column(name = "ds_biografia", nullable = false)
    private String biografia;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("")
    @JoinColumn(name = "id_album")
    private Album album;

}
