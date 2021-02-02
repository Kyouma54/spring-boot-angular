package br.com.kyouma54.service.impl;

import br.com.kyouma54.service.AlbumService;
import br.com.kyouma54.service.dto.AlbumDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AlbumServiceImpl implements AlbumService {

    @Override
    public AlbumDTO save(AlbumDTO albumDTO) {
        return null;
    }

    @Override
    public Page<AlbumDTO> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Optional<AlbumDTO> findOne(Long id) {
        return Optional.empty();
    }

    @Override
    public void delete(Long id) {

    }
}
