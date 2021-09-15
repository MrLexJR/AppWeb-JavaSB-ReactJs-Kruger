package com.jr.kruger.jr_proyect_k.modules;

import javax.persistence.*;

@Entity
@Table(name = "persona")
public class PersonaModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  private Long id;
  private String cedula;
  private String nombres;
  private String apellidos;
  private String correo;
  private String password;
  private String fnacimiento;
  private String direccion;
  private String movil;
  private String evacunado;
  private String fvacunado;
  private String ndosis;

  @ManyToOne
  @JoinColumn(name = "id_rol")
  private RolModel rol;

  PersonaModel(String cedula, String nombres, String apellidos, String correo, String password, RolModel rol,
      String fnacimiento, String direccion, String movil, String evacunado, String fvacunado, String ndosis) {
    super();
    this.cedula = cedula;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.password = password;
    this.rol = rol;
    this.fnacimiento = fnacimiento;
    this.direccion = direccion;
    this.movil = movil;
    this.evacunado = evacunado;
    this.fvacunado = fvacunado;
    this.ndosis = ndosis;
  }

  public PersonaModel() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCedula() {
    return cedula;
  }

  public void setCedula(String cedula) {
    this.cedula = cedula;
  }

  public String getNombres() {
    return nombres;
  }

  public void setNombres(String nombres) {
    this.nombres = nombres;
  }

  public String getApellidos() {
    return apellidos;
  }

  public void setApellidos(String apellidos) {
    this.apellidos = apellidos;
  }

  public String getCorreo() {
    return correo;
  }

  public void setCorreo(String correo) {
    this.correo = correo;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public RolModel getRol() {
    return rol;
  }

  public void setRol(RolModel rol) {
    this.rol = rol;
  }

  public String getDireccion() {
    return direccion;
  }

  public void setDireccion(String direccion) {
    this.direccion = direccion;
  }

  public String getFnacimiento() {
    return fnacimiento;
  }

  public void setFnacimiento(String fnacimiento) {
    this.fnacimiento = fnacimiento;
  }

  public String getMovil() {
    return movil;
  }

  public void setMovil(String movil) {
    this.movil = movil;
  }

  public String getEvacunado() {
    return evacunado;
  }

  public void setEvacunado(String evacunado) {
    this.evacunado = evacunado;
  }

  public String getFvacunado() {
    return fvacunado;
  }

  public void setFvacunado(String fvacunado) {
    this.fvacunado = fvacunado;
  }

  public String getNdosis() {
    return ndosis;
  }

  public void setNdosis(String ndosis) {
    this.ndosis = ndosis;
  }

}
