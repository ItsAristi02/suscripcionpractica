package com.example.BackEndPractice.controllers;

import com.example.BackEndPractice.models.ClienteModel;
import com.example.BackEndPractice.services.ClienteService;
import com.example.BackEndPractice.services.ServicioBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cliente")
@CrossOrigin
public class ClienteController {

    @Autowired
    ClienteService clienteService;











}
