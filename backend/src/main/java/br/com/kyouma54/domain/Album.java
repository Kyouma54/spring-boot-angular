package br.com.kyouma54.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name = "tb_album")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Data
public class Album implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy="increment")
    @Column(name = "id_album")
    private Long id;

    @NotNull
    @Column(name = "ds_foto", nullable = false)
    private String foto;

    @NotNull
    @Column(name = "ds_nome", nullable = false)
    private String nome;

    @NotNull
    @Column(name = "dt_album", nullable = false)
    private ZonedDateTime dataDeLancamento;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("")
    @JoinColumn(name = "id_musica")
    private Musica musica;

}
