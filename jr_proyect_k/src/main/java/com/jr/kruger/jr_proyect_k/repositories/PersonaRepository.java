package com.jr.kruger.jr_proyect_k.repositories;

import java.util.ArrayList;

import com.jr.kruger.jr_proyect_k.modules.PersonaModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository<PersonaModel, Long>{
    public abstract ArrayList<PersonaModel> findByCedula(String cedula);
}

