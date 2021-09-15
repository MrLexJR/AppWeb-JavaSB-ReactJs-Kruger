import React, { Component } from 'react'
import personaService from '../services/personaService';
import rolService from '../services/rolService';

class ActualizaPersonaComponet extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      cedula: '',
      nombres: '',
      apellidos: '',
      correo: '',
      rol: '',
      id_rol: 0,
      roles: []
    }
    this.changeCedulaHandler = this.changeCedulaHandler.bind(this);
    this.changeNombresHandler = this.changeNombresHandler.bind(this);
    this.changeApellidosHandler = this.changeApellidosHandler.bind(this);
    this.changeCorreoHandler = this.changeCorreoHandler.bind(this);
    this.changeidRolHandler = this.changeidRolHandler.bind(this);
    this.editaPersona = this.editaPersona.bind(this);
  }

  componentDidMount() {
    personaService.getPersonaById(this.state.id).then((res) => {
      let persona = res.data;
      this.setState({
        cedula: persona.cedula,
        nombres: persona.nombres,
        apellidos: persona.apellidos,
        correo: persona.correo,
        id_rol: persona.rol.id
      })
    });
    rolService.getRoles().then((res) => {
      this.setState({ roles: res.data })
    });
  }

  editaPersona = (e) => {
    e.preventDefault();
    let persona = { id: this.state.id, cedula: this.state.cedula, nombres: this.state.nombres, apellidos: this.state.apellidos, correo: this.state.correo, rol: { id: this.state.id_rol } };
    console.log('personas =>' + JSON.stringify(persona));

    personaService.createPersona(persona).then(res => {
      this.props.history.push('/personas');
    })
  }
  
  changeidRolHandler = (event) => {
    this.setState({ id_rol: event.target.value });
    console.log(event.target.value);
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
            <br/><h1 className="text-center">Editar Persona</h1><br/>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Cedula: </label>
                    <input placeholder="Identificacion" name="cedula" className="form-control"
                      value={this.state.cedula} onChange={this.changeCedulaHandler} />
                  </div>
                  <div className="form-group">
                    <label> Nombres: </label>
                    <input placeholder="Nombre Completos" name="nombres" className="form-control"
                      value={this.state.nombres} onChange={this.changeNombresHandler} />
                  </div>
                  <div className="form-group">
                    <label> Apellidos: </label>
                    <input placeholder="Apellidos Completos" name="apellidos" className="form-control"
                      value={this.state.apellidos} onChange={this.changeApellidosHandler} />
                  </div>
                  <div className="form-group">
                    <label> Correo: </label>
                    <input placeholder="Correo Electronico" name="correo" className="form-control"
                      value={this.state.correo} onChange={this.changeCorreoHandler} />
                  </div>
                  <div className="form-group">
                    <label> Rol: </label>
                    <select name="id_rol" className="form-control" value={this.state.id_rol} onChange={this.changeidRolHandler} >
                      <option value={0}  disabled>Escojer...</option>
                      {this.state.roles.map(
                        rol => <option key={rol.id} value={rol.id} >{rol.tipo}</option>
                      )}
                    </select>
                  </div>
                  <br/>
                  <button className="btn btn-success" onClick={this.editaPersona}>Guardar</button>
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

export default ActualizaPersonaComponet