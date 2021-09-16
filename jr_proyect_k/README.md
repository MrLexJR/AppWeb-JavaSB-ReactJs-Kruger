# Backend Spring Boot 

Esta parte se construyo por para el manejo de datos y administración de la base de datos.
Se inicia con configurar con la dirección de la base de datos, así como las credenciales para poder ingresar sin ningún problema, lo siguiente se estructurara el proyecto con los modelos que se convertirán en tablas dentro de la base, en este caso se utilizo la clase `Persona` y `Rol` los datos que se va a utilizar así mismo con los getter y setter para instancia los datos que se utilizaran.

Luego se crean los repositorios, controladores y services que son indespensable para la configuracion de los datos.

## Ejecución

Para correr el pryecto hay que ejecutar el siguiente comando

```bash
mvnw.cmd spring-boot:run
```

La Api se ejecutara en la direccion
http://localhost:8080

Y tendra las direcciones donde obtendremos los datos en json que se pidan tales como 

```bash
http://localhost:8080/persona
```

```bash
http://localhost:8080/rol
```






