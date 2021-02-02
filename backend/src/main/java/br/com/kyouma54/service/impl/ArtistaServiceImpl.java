package br.com.kyouma54.service.impl;

import br.com.kyouma54.service.ArtistaService;
import br.com.kyouma54.service.dto.ArtistaDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class ArtistaServiceImpl implements ArtistaService {
    @Override
    public ArtistaDTO save(ArtistaDTO artistaDTO) {
        return null;
    }

    @Override
    public Page<ArtistaDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<ArtistaDTO> findOne(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
