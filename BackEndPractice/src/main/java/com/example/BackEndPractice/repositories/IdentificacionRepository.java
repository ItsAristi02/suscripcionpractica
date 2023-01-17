package com.example.BackEndPractice.repositories;

import com.example.BackEndPractice.models.IdentificacionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdentificacionRepository extends JpaRepository<IdentificacionModel, Integer> {


}
