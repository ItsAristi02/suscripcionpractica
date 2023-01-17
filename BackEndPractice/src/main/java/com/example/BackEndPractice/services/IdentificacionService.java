package com.example.BackEndPractice.services;


import com.example.BackEndPractice.models.IdentificacionModel;
import com.example.BackEndPractice.repositories.IdentificacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IdentificacionService {

    @Autowired
    IdentificacionRepository identificacionRepository;

    public ArrayList<IdentificacionModel> buscarIdentificacion(){
        return(ArrayList<IdentificacionModel>) identificacionRepository.findAll();
    }
}
