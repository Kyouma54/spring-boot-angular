package br.com.kyouma54.service.dto;

import br.com.kyouma54.domain.Musica;
import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.List;

@Data
public class AlbumDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String foto;
    private String nome;
    private ZonedDateTime dataDeLancamento;
    private List<Musica> musicas;
}
