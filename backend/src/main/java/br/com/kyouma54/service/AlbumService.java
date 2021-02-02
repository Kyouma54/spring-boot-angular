package br.com.kyouma54.service;

import br.com.kyouma54.service.dto.AlbumDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface AlbumService {

    AlbumDTO save(AlbumDTO albumDTO);

    Page<AlbumDTO> findAll(Pageable pageable);

    Optional<AlbumDTO> findOne(Long id);

    void delete(Long id);
}
