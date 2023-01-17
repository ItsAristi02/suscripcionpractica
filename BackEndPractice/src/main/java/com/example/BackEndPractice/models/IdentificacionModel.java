package com.example.BackEndPractice.models;

import jakarta.persistence.*;
@Entity
@Table(name = "identificaciones")

public class IdentificacionModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(unique = true, nullable = false)
        private Integer id;

        @Column(name="tipoIdentificacion")
        private String tipoIdentificacion;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipoIdentificacion() {
        return tipoIdentificacion;
    }

    public void setTipoIdentificacion(String tipoIdentificacion) {
        this.tipoIdentificacion = tipoIdentificacion;
    }
}
