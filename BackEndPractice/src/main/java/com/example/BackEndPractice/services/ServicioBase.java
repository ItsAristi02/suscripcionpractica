package com.example.BackEndPractice.services;

import com.example.BackEndPractice.models.ClienteModel;

import java.util.List;

public interface ServicioBase <E> {

    public List<E> listarClientes() throws Exception;

    public E buscarPorId (Integer id) throws Exception;

    ClienteModel registrarCliente(ClienteModel entity) throws Exception;

}
