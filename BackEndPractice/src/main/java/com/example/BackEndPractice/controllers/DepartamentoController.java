package com.example.BackEndPractice.controllers;

import com.example.BackEndPractice.models.DepartamentoModel;
import com.example.BackEndPractice.services.DepartamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

    @RestController
    @RequestMapping("/departamentos")
    public class DepartamentoController {

        @Autowired
        private DepartamentoService departamentoService;

        @GetMapping()
        public ResponseEntity<List<DepartamentoModel>> obtenerDepartamentos(@RequestParam(required = false) Integer paisId){
            List<DepartamentoModel> departamentos = paisId == null ?
                    departamentoService.obtenerDepartamentos() :
                    departamentoService.obtenerDepartamentoPorPais(paisId);
            return new ResponseEntity<>(departamentos, HttpStatus.OK);
        }
}
