package br.com.kyouma54.service.impl;

import br.com.kyouma54.domain.Musica;
import br.com.kyouma54.repository.MusicaRepository;
import br.com.kyouma54.service.MusicaService;
import br.com.kyouma54.service.dto.MusicaDTO;
import br.com.kyouma54.service.mapper.MusicaMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class MusicaServiceImpl implements MusicaService {

    private final MusicaRepository musicaRepository;

    private final MusicaMapper musicaMapper;

    public MusicaServiceImpl(MusicaRepository musicaRepository, MusicaMapper musicaMapper) {
        this.musicaRepository = musicaRepository;
        this.musicaMapper = musicaMapper;
    }

    @Override
    public MusicaDTO save(MusicaDTO alternativaQuestaoDTO) {
        Musica alternativaQuestao = musicaMapper.toEntity(alternativaQuestaoDTO);
        alternativaQuestao = musicaRepository.save(alternativaQuestao);
        return musicaMapper.toDto(alternativaQuestao);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<MusicaDTO> findOne(Long id) {
        Optional<Musica> musica = musicaRepository.findById(id);
        MusicaDTO musicaDTO = musicaMapper.toDto(musica.get());
        return musicaRepository.findById(id).map(musicaMapper::toDto);
    }

    @Override
    public void delete(Long id) {
        musicaRepository.deleteById(id);
    }

    @Override
    public Page<MusicaDTO> findAll(Pageable pageable) {
        return null;
    }
}
