package br.com.kyouma54.service.mapper;

import br.com.kyouma54.domain.Album;
import br.com.kyouma54.domain.Artista;
import br.com.kyouma54.service.dto.AlbumDTO;
import br.com.kyouma54.service.dto.ArtistaDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { AlbumMapper.class })
public interface ArtistaMapper extends EntityMapper<ArtistaDTO, Artista>{
}
