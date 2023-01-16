package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.ClienteModel;
import com.example.BackEndPractice.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    public ArrayList<ClienteModel> buscarClientes(){
        return(ArrayList<ClienteModel>) clienteRepository.findAll();
    }

    public ClienteModel guardarCliente(ClienteModel cliente){
        return clienteRepository.save(cliente);
    }

    public Optional<ClienteModel> buscarPorId(Integer id){
        return clienteRepository.findById(id);
    }

    public boolean eliminarCliente(Integer id){
        try {
            clienteRepository.deleteById(id);
            return true;
        }catch (Exception error){
            return false;
        }
    }
}
