package br.com.kyouma54.service.mapper;

import br.com.kyouma54.domain.Album;
import br.com.kyouma54.service.dto.AlbumDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = { MusicaMapper.class })
public interface AlbumMapper extends EntityMapper<AlbumDTO, Album>{
}
