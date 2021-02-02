package br.com.kyouma54.service.mapper;

import br.com.kyouma54.domain.Artista;
import br.com.kyouma54.domain.Musica;
import br.com.kyouma54.service.dto.ArtistaDTO;
import br.com.kyouma54.service.dto.MusicaDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface MusicaMapper extends EntityMapper<MusicaDTO, Musica>{
    Musica toEntity(MusicaDTO dto);
    MusicaDTO toDto(Musica entity);
}
