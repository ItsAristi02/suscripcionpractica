package com.example.BackEndPractice.controllers;

import com.example.BackEndPractice.models.ClienteModel;
import com.example.BackEndPractice.services.ClienteService;
import com.example.BackEndPractice.services.ServicioBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @PostMapping
    public ResponseEntity <?> registrarCliente(@RequestBody ClienteModel cliente){
        try {
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(clienteService.registrarCliente(cliente));
        }catch (Exception error) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{Mensaje: Revisa la peticion}" + error);
        }
    }

    @GetMapping
    public ResponseEntity<?>buscarCliente(){
        try{
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(clienteService.listarClientes());
        }catch (Exception error){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("{Mensaje: Revisa la peticion}" + error);
        }

    }










}
