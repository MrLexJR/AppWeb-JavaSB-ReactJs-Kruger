package com.jr.kruger.jr_proyect_k.services;

import java.util.ArrayList;
import java.util.Optional;

import com.jr.kruger.jr_proyect_k.modules.PersonaModel;
import com.jr.kruger.jr_proyect_k.repositories.PersonaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {
    @Autowired
    PersonaRepository personaRepository;

    public ArrayList<PersonaModel> obtenerPersonas(){
        return (ArrayList<PersonaModel>) personaRepository.findAll();
    }

    public PersonaModel guardarPersona(PersonaModel persona){
        return personaRepository.save(persona);
    }

    public Optional<PersonaModel> obtenerPorId(Long id){
        return personaRepository.findById(id);
    }

    public ArrayList<PersonaModel> obtenerPorCedula(String cedula){
        return personaRepository.findByCedula(cedula);
    }

    public boolean eliminarUsuario(Long id){
        try {
            personaRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
        
}
