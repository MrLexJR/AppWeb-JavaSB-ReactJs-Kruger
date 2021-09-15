package com.jr.kruger.jr_proyect_k.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.jr.kruger.jr_proyect_k.modules.PersonaModel;
import com.jr.kruger.jr_proyect_k.services.PersonaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persona")
public class PersonaController {
    @Autowired
    PersonaService personaService;

    @GetMapping
    public ArrayList<PersonaModel> obtenerPersonas(){
        return personaService.obtenerPersonas();
    }

    @PostMapping
    public PersonaModel guardarPersona(@RequestBody PersonaModel persona){
        return this.personaService.guardarPersona(persona);
    }

    @GetMapping ( path = "/{id}")
    public Optional<PersonaModel> obtenerPersonaPorId(@PathVariable("id") Long id){
        return this.personaService.obtenerPorId(id);
    }

    @GetMapping("/query")
    public ArrayList<PersonaModel> obtenerPersonaPorCedula(@RequestParam("cedula") String cedula){
        return this.personaService.obtenerPorCedula(cedula);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.personaService.eliminarUsuario(id);
        if (ok) {
            return "Se elimino el usuario con id="+id;
        } else {
            return "No se pudo eliminar el usuario con id"+id;
        }
    }
}
