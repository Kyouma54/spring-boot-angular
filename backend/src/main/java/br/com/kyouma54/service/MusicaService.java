package br.com.kyouma54.service;

import br.com.kyouma54.service.dto.MusicaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface MusicaService {

    MusicaDTO save(MusicaDTO musicaDTO);

    Page<MusicaDTO> findAll(Pageable pageable);

    Optional<MusicaDTO> findOne(Long id);

    void delete(Long id);
}
