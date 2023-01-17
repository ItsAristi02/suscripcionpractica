package com.example.BackEndPractice.controllers;

import com.example.BackEndPractice.models.MarcaModel;
import com.example.BackEndPractice.services.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/marca")
public class MarcaController {

    @Autowired
    MarcaService marcaService;

    @GetMapping()
    public ArrayList<MarcaModel> buscarMarcas(){
        return marcaService.buscarMarca();
    }
}
