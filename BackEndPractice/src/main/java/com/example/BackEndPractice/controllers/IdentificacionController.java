package com.example.BackEndPractice.controllers;


import com.example.BackEndPractice.models.ClienteModel;

import com.example.BackEndPractice.models.IdentificacionModel;
import com.example.BackEndPractice.services.IdentificacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/identificacion")
public class IdentificacionController {

    @Autowired
    IdentificacionService identificacionService;

    @GetMapping()
    public ArrayList<IdentificacionModel> buscarIdentificacion(){
        return identificacionService.buscarIdentificacion();
    }
}
