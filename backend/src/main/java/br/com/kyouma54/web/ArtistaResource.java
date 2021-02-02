package br.com.kyouma54.web;

import br.com.kyouma54.service.ArtistaService;
import br.com.kyouma54.service.dto.ArtistaDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ArtistaResource {
    private final Logger log = LoggerFactory.getLogger(ArtistaResource.class);

    private final ArtistaService artistaService;

    public ArtistaResource(ArtistaService artistaService) {
        this.artistaService = artistaService;
    }

    @PostMapping("/artista")
    public ResponseEntity<ArtistaDTO> createArtista(@RequestBody ArtistaDTO artistaDTO) throws URISyntaxException {
        log.debug("REST request to save {}", artistaDTO);
        ArtistaDTO result = artistaService.save(artistaDTO);
        return ResponseEntity.created(new URI("/api/projetos/" + result.getId())).body(result);
    }

    @PutMapping("/artista")
    public ResponseEntity<ArtistaDTO> updateArtista(@RequestBody ArtistaDTO artistaDTO) throws URISyntaxException {
        log.debug("REST request to update {}", artistaDTO);
        ArtistaDTO result = artistaService.save(artistaDTO);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/artista/{id}")
    public ResponseEntity<ArtistaDTO> getArtista(@PathVariable Long id) {
        log.debug("REST request to get {}", id);
        Optional<ArtistaDTO> artistaDTO = artistaService.findOne(id);
        return artistaDTO.map(response -> ResponseEntity.ok().body(response))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/artista/{id}")
    public ResponseEntity<Void> deleteProjeto(@PathVariable Long id) {
        log.debug("REST request to delete {}", id);
        artistaService.delete(id);
        return ResponseEntity.ok().build();
    }

}
