package com.jr.kruger.jr_proyect_k.controllers;

import java.util.ArrayList;

import com.jr.kruger.jr_proyect_k.modules.RolModel;
import com.jr.kruger.jr_proyect_k.services.RolService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rol")
public class RolController {
    @Autowired
    RolService rolService;

    @GetMapping
    public ArrayList<RolModel> obtenerRol(){
        return rolService.obtenerRol();
    }
}
