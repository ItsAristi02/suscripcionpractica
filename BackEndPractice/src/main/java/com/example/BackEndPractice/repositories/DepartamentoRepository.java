package com.example.BackEndPractice.repositories;

import com.example.BackEndPractice.models.DepartamentoModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartamentoRepository extends JpaRepository<DepartamentoModel, Integer> {
    List<DepartamentoModel> findByPaisId(Integer paisId);
}
