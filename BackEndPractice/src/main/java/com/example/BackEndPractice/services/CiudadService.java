package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.CiudadModel;
import com.example.BackEndPractice.repositories.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CiudadService {
    @Autowired
    private CiudadRepository ciudadRepository;

    public List<CiudadModel> obtenerCiudades() {
        return ciudadRepository.findAll();
    }

    public List<CiudadModel> optenerCiudadPorDepartamento(Integer departamentoId) {
        return ciudadRepository.findByDepartamentoId(departamentoId);
    }
}
