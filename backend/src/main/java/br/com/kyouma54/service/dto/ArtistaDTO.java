package br.com.kyouma54.service.dto;

import br.com.kyouma54.domain.Album;
import br.com.kyouma54.domain.Musica;
import lombok.Data;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.List;

@Data
public class ArtistaDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private String foto;
    private String nome;
    private String facebook;
    private String instagram;
    private String wikipedia;
    private String twitter;
    private String biografia;
    private List<Album> albuns;

}
