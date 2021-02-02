package br.com.kyouma54.web;

import br.com.kyouma54.service.AlbumService;
import br.com.kyouma54.service.dto.AlbumDTO;
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
public class AlbumResource {
    private final Logger log = LoggerFactory.getLogger(AlbumResource.class);

    private final AlbumService albumService;

    public AlbumResource(AlbumService albumService) {
        this.albumService = albumService;
    }

    @PostMapping("/album")
    public ResponseEntity<AlbumDTO> createArtista(@RequestBody AlbumDTO albumDTO) throws URISyntaxException {
        log.debug("REST request to save {}", albumDTO);
        AlbumDTO result = albumService.save(albumDTO);
        return ResponseEntity.created(new URI("/api/projetos/" + result.getId())).body(result);
    }

    @PutMapping("/album")
    public ResponseEntity<AlbumDTO> updateArtista(@RequestBody AlbumDTO albumDTO) throws URISyntaxException {
        log.debug("REST request to update {}", albumDTO);
        AlbumDTO result = albumService.save(albumDTO);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/album/{id}")
    public ResponseEntity<AlbumDTO> getArtista(@PathVariable Long id) {
        log.debug("REST request to get {}", id);
        Optional<AlbumDTO> albumDTO = albumService.findOne(id);
        return albumDTO.map(response -> ResponseEntity.ok().body(response))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/album/{id}")
    public ResponseEntity<Void> deleteProjeto(@PathVariable Long id) {
        log.debug("REST request to delete {}", id);
        albumService.delete(id);
        return ResponseEntity.ok().build();
    }
}
