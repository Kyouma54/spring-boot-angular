package br.com.kyouma54.web;

import br.com.kyouma54.service.MusicaService;
import br.com.kyouma54.service.dto.MusicaDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MusicaResource {
    private final Logger log = LoggerFactory.getLogger(MusicaResource.class);

    private MusicaService musicaService;

    public MusicaResource(MusicaService musicaService) {
        this.musicaService = musicaService;
    }

    @PostMapping("/musica")
    public ResponseEntity<MusicaDTO> createMusica(@RequestBody MusicaDTO musicaDTO) throws URISyntaxException {
        log.info("REST request to save musica : {}", musicaDTO);
        MusicaDTO result = musicaService.save(musicaDTO);
        return ResponseEntity.created(new URI("/api/projetos/" + result.getId())).body(result);
    }

    @PutMapping("/musica")
    public ResponseEntity<MusicaDTO> updateMusica(@RequestBody MusicaDTO musicaDTO) throws URISyntaxException {
        log.info("REST request to update Musica : {}", musicaDTO);
        MusicaDTO result = musicaService.save(musicaDTO);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/musica/{id}")
    public ResponseEntity<MusicaDTO> getMusica(@PathVariable Long id) {
        log.info("REST request to get Musica : {}", id);
        Optional<MusicaDTO> musicaDTO = musicaService.findOne(id);
        return musicaDTO.map(response -> ResponseEntity.ok().body(response))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/musica/{id}")
    public ResponseEntity<Void> deleteProjeto(@PathVariable Long id) {
        log.info("REST request to delete musica : {}", id);
        musicaService.delete(id);
        return ResponseEntity.ok().build();
    }

//    @GetMapping("/musica")
//    public ResponseEntity<List<MusicaDTO>> getAllProjetos(ProjetoCriteria criteria, Pageable pageable) {
//        log.info("REST request to get Projetos by criteria: {}", criteria);
//        Page<MusicaDTO> page = projetoQueryService.findByCriteria(criteria, pageable);
//        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/musica");
//        return ResponseEntity.ok().headers(headers).body(page.getContent());
//    }

//    @GetMapping("/musica/count")
//    public ResponseEntity<Long> countProjetos(ProjetoCriteria criteria) {
//        log.info("REST request to count Projetos by criteria: {}", criteria);
//        return ResponseEntity.ok().body(projetoQueryService.countByCriteria(criteria));
//    }

}
