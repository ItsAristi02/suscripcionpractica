package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.ClienteModel;
import com.example.BackEndPractice.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class ClienteService implements ServicioBase<ClienteModel> {

    @Autowired
    ClienteRepository clienteRepository;

    @Override
    public List<ClienteModel> listarClientes() throws Exception {
        try{
            List<ClienteModel> clientes= clienteRepository.findAll();
            return clientes;
        }
        catch (Exception error){
            throw new Exception(error.getMessage());
        }
    }


    @Override
    public ClienteModel buscarPorId(Integer id) throws Exception {
        try{
            Optional<ClienteModel> clienteBuscado=clienteRepository.findById(id);
            return clienteBuscado.get();
        }
        catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }

    @Override
    public ClienteModel registrarCliente(ClienteModel entity) throws Exception {
        try{
            entity = clienteRepository.save(entity);
            return entity;
        }
        catch(Exception error){
            throw new Exception(error.getMessage());
        }
    }
}

