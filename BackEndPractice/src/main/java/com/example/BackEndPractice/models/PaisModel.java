package com.example.BackEndPractice.models;

import jakarta.persistence.*;

@Entity
@Table(name = "paises")
public class PaisModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "nombre")
    private String nombre;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPais() {
        return nombre;
    }

    public void setPais(String pais) {
        this.nombre = pais;
    }
}
