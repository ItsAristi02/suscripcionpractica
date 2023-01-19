package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.DepartamentoModel;
import com.example.BackEndPractice.repositories.DepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartamentoService {
    @Autowired
    private DepartamentoRepository departamentoRepository;

    public List<DepartamentoModel> obtenerDepartamentos(){
        return departamentoRepository.findAll();
    }

    public List<DepartamentoModel> obtenerDepartamentoPorPais(Integer paisId){
        return departamentoRepository.findByPaisId(paisId);
    }
}
