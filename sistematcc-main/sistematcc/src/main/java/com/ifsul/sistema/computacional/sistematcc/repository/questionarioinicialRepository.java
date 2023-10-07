package com.ifsul.sistema.computacional.sistematcc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ifsul.sistema.computacional.sistematcc.model.questionarioinicial;
import com.ifsul.sistema.computacional.sistematcc.model.turma;

public interface questionarioinicialRepository extends JpaRepository<questionarioinicial,Integer>{
    List<questionarioinicial> findByTurmas(turma turma);
}
