package com.example.BackEndPractice.repositories;

import com.example.BackEndPractice.models.MarcaModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarcaRepository extends JpaRepository<MarcaModel, Integer> {
}
