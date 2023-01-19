package com.example.BackEndPractice.models;

import jakarta.persistence.*;

@Entity
@Table(name = "departamentos")
public class DepartamentoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "nombre")

    private String nombre;
    @ManyToOne
    @JoinColumn(name = "pais_id", nullable = false)
    private PaisModel pais;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public PaisModel getPais() {
        return pais;
    }

    public void setPais(PaisModel pais) {
        this.pais = pais;
    }
}
