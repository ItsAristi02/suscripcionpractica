package com.example.BackEndPractice.controllers;

import com.example.BackEndPractice.models.PaisModel;
import com.example.BackEndPractice.services.PaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/paises")
public class PaisController {

    @Autowired
    private PaisService paisService;

    @GetMapping()
    public ResponseEntity<List<PaisModel>> obtenerPaises() {
        List<PaisModel> paises = paisService.obtenerPaises();
        return new ResponseEntity<>(paises, HttpStatus.OK);
    }
}
