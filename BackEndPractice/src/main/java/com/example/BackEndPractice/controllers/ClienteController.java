package com.example.BackEndPractice.controllers;

import com.example.BackEndPractice.models.ClienteModel;
import com.example.BackEndPractice.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping()
    public ArrayList<ClienteModel> buscarClientes(){
        return clienteService.buscarClientes();
    }

    @PostMapping()
    public ClienteModel guardarCliente(@RequestBody ClienteModel cliente){
        return this.clienteService.guardarCliente(cliente);
    }

    @GetMapping(path = "/{id}")
    public Optional<ClienteModel> buscarPorId(@PathVariable("id") Integer id){
        return  this.clienteService.buscarPorId(id);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarporId(@PathVariable("id") Integer id){
        boolean ok = this.clienteService.eliminarCliente(id);
        if (ok){
            return "Se elimino correctamente el cliente con id " + id;
        }else {
            return "No se pudo eliminar correctamente el usuario con id " + id;
        }
    }

}
