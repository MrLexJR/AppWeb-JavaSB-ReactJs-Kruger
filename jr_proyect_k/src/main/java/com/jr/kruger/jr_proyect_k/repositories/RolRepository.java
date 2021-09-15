package com.jr.kruger.jr_proyect_k.repositories;

import com.jr.kruger.jr_proyect_k.modules.RolModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<RolModel, Long>{
        
}
