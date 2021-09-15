import React, { Component } from 'react'
import personaService from '../services/personaService';
import rolService from '../services/rolService';

class NuevaPersonaComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      cedula: '',
      nombres: '',
      apellidos: '',
      correo: '',
      rol: '',
      id_rol: 0,
      roles: [],
      errors: []
    }
    this.changeCedulaHandler = this.changeCedulaHandler.bind(this);
    this.changeNombresHandler = this.changeNombresHandler.bind(this);
    this.changeApellidosHandler = this.changeApellidosHandler.bind(this);
    this.changeCorreoHandler = this.changeCorreoHandler.bind(this);
    this.changeidRolHandler = this.changeidRolHandler.bind(this);
    this.guardaPersona = this.guardaPersona.bind(this);
  }

  componentDidMount() {
    rolService.getRoles().then((response) => {
      this.setState({ roles: response.data })
    });
  }

  guardaPersona = (e) => {
    e.preventDefault();
    //VALIDATE
    var errors = [];
    var letters = /^[a-z]*$/i;


    //nombres - apellidos 
    if (this.state.nombres === "" || !this.state.nombres.match(letters)) {
      errors.push("nombres");
    }



    if (this.state.apellidos === ""|| !this.state.apellidos.match(letters) ) {
      errors.push("apellidos");
    }

    //correo
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.correo).toLowerCase());

    if (!validEmail) {
      errors.push("correo");
    }

    //rol 
    if (this.state.id_rol === 0) {
      errors.push("id_rol");
    }

    //cedula
    var cedula = this.state.cedula;
    if (cedula === "") {
      errors.push("cedula");
    } else {
      //Obtenemos el digito de la region que sonlos dos primeros digitos
      var digito_region = cedula.substring(0, 2);

      //Pregunto si la region existe ecuador se divide en 24 regiones
      if (digito_region >= 1 && digito_region <= 24) {

        // Extraigo el ultimo digito
        var ultimo_digito = cedula.substring(9, 10);

        //Agrupo todos los pares y los sumo
        var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        var numero1 = cedula.substring(0, 1);
        var numero1 = (numero1 * 2);
        if (numero1 > 9) { var numero1 = (numero1 - 9); }

        var numero3 = cedula.substring(2, 3);
        var numero3 = (numero3 * 2);
        if (numero3 > 9) { var numero3 = (numero3 - 9); }

        var numero5 = cedula.substring(4, 5);
        var numero5 = (numero5 * 2);
        if (numero5 > 9) { var numero5 = (numero5 - 9); }

        var numero7 = cedula.substring(6, 7);
        var numero7 = (numero7 * 2);
        if (numero7 > 9) { var numero7 = (numero7 - 9); }

        var numero9 = cedula.substring(8, 9);
        var numero9 = (numero9 * 2);
        if (numero9 > 9) { var numero9 = (numero9 - 9); }

        var impares = numero1 + numero3 + numero5 + numero7 + numero9;

        //Suma total
        var suma_total = (pares + impares);

        //extraemos el primero digito
        var primer_digito_suma = String(suma_total).substring(0, 1);

        //Obtenemos la decena inmediata
        var decena = (parseInt(primer_digito_suma) + 1) * 10;

        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        var digito_validador = decena - suma_total;

        //Si el digito validador es = a 10 toma el valor de 0
        if (digito_validador == 10)
          var digito_validador = 0;

        //Validamos que el digito validador sea igual al de la cedula
        if (digito_validador == ultimo_digito) {
          console.log('la cedula:' + cedula + ' es correcta');
        } else {
          errors.push("cedula");
        }
      } else {
        errors.push("cedula");
      }
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      alert("Ingrese todos los campos correcatamente!");
      return false;
    } else {
      let persona = { cedula: this.state.cedula, nombres: this.state.nombres, apellidos: this.state.apellidos, correo: this.state.correo, rol: { id: this.state.id_rol } };
      console.log('personas =>' + JSON.stringify(persona));
      personaService.createPersona(persona).then(res => {
        this.props.history.push('/personas');
      });
    }
  }
  

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }


  changeidRolHandler = (event) => {
    this.setState({ id_rol: event.target.value });
  }

  changeCedulaHandler = (event) => {
    this.setState({ cedula: event.target.value });
  }

  changeNombresHandler = (event) => {
    this.setState({ nombres: event.target.value });
  }

  changeApellidosHandler = (event) => {
    this.setState({ apellidos: event.target.value });
  }

  changeCorreoHandler = (event) => {
    this.setState({ correo: event.target.value });
  }

  cancel() {
    this.props.history.push('/personas');
  }


  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <br /><h1 className="text-center">Agregar Persona</h1><br />
              <div className="card-body">
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <label> Cedula: </label>
                    <input type="text" autoComplete="off" maxLength="10" placeholder="Identificacion"
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      name="cedula" className={this.hasError("cedula") ? "form-control is-invalid" : "form-control"}
                      value={this.state.cedula} onChange={this.changeCedulaHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Nombres: </label>
                    <input placeholder="Nombre Completos" name="nombres"
                      className={this.hasError("nombres") ? "form-control is-invalid" : "form-control"}
                      value={this.state.nombres} onChange={this.changeNombresHandler} />
                  </div>
                  <div className="form-group">
                    <label> Apellidos: </label>
                    <input required placeholder="Apellidos Completos" name="apellidos"
                      className={this.hasError("apellidos") ? "form-control is-invalid" : "form-control"}
                      value={this.state.apellidos} onChange={this.changeApellidosHandler} />
                  </div>
                  <div className="form-group">
                    <label> Correo: </label>
                    <input required type="email" placeholder="Correo Electronico" name="correo"
                      className={this.hasError("correo") ? "form-control is-invalid" : "form-control"}
                      value={this.state.correo} onChange={this.changeCorreoHandler} />
                  </div>
                  <div className="form-group">
                    <label> Rol: </label>
                    <select name="id_rol" value={this.state.id_rol} onChange={this.changeidRolHandler}
                      className={this.hasError("id_rol") ? "form-control is-invalid" : "form-control"}>
                      <option value={0} disabled>Escojer...</option>
                      {this.state.roles.map(
                        rol => <option key={rol.id} value={rol.id} >{rol.tipo}</option>
                      )}
                    </select>
                  </div>
                  <br />
                  <button className="btn btn-success" onClick={this.guardaPersona}>Guardar</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default NuevaPersonaComponent