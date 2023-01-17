package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.MarcaModel;
import com.example.BackEndPractice.repositories.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MarcaService {

    @Autowired
    MarcaRepository marcaRepository;

    public ArrayList<MarcaModel> buscarMarca(){
        return(ArrayList<MarcaModel>) marcaRepository.findAll();
    }
}
