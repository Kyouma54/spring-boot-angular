package br.com.kyouma54.repository;

import br.com.kyouma54.domain.Musica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicaRepository extends JpaRepository<Musica, Long>, JpaSpecificationExecutor<Musica> {
}
