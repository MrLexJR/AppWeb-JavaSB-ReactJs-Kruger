package com.jr.kruger.jr_proyect_k.services;

import java.util.ArrayList;

import com.jr.kruger.jr_proyect_k.modules.RolModel;
import com.jr.kruger.jr_proyect_k.repositories.RolRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {
    @Autowired
    RolRepository rolRepository; 

    public ArrayList<RolModel> obtenerRol(){
        return (ArrayList<RolModel>) rolRepository.findAll();
    }
    
}
