package com.example.BackEndPractice.repositories;

import com.example.BackEndPractice.models.PaisModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaisRepository extends JpaRepository<PaisModel, Integer> {
}
