package com.example.BackEndPractice.repositories;

import com.example.BackEndPractice.models.CiudadModel;
import com.example.BackEndPractice.models.DepartamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CiudadRepository extends JpaRepository<CiudadModel, Integer> {
    List<CiudadModel> findByDepartamentoId(Integer DepartamentoId);
}
