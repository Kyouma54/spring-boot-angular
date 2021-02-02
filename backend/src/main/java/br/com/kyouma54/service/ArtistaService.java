package br.com.kyouma54.service;

import br.com.kyouma54.service.dto.ArtistaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ArtistaService {

    ArtistaDTO save(ArtistaDTO artistaDTO);

    Page<ArtistaDTO> findAll(Pageable pageable);

    Optional<ArtistaDTO> findOne(Long id);

    void delete(Long id);

}
