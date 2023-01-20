package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.PaisModel;
import com.example.BackEndPractice.repositories.PaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaisService {
    @Autowired
    private PaisRepository paisRepository;


    public List<PaisModel> obtenerPaises(){
        return paisRepository.findAll();
    }
}
