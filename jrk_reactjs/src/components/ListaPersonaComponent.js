import React from 'react';
import PersonaService from '../services/personaService';

class PersonaComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      personas: []
    }
    this.addPersona = this.addPersona.bind(this);
    this.editPersona = this.editPersona.bind(this);
    this.deletePersona = this.deletePersona.bind(this);
  }

  componentDidMount() {
    PersonaService.getPersona().then((response) => {
      this.setState({ personas: response.data })
    });
  }

  deletePersona(id) {
    PersonaService.deletePersona(id).then(res => {
      this.setState({ personas: this.state.personas.filter(persona => persona.id !== id) });
    });
  }

  editPersona(id) {
    this.props.history.push(`/upd-personas/${id}`);
  }

  addPersona() {
    this.props.history.push('/add-personas');
  }

  render() {
    return (
      <div className="container">
        <br /><br /><h1 className="text-center">Listado de Persona</h1><br /><br />
        <div className="row">
          <div className="col-sm">
            <button type="button" className="btn btn-primary" onClick={this.addPersona}> Agregar Empleado</button>
          </div>
        </div><br/>
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Cedula</td>
              <td>Nombres</td>
              <td>Apellidos</td>
              <td>Email</td>
              <td>Rol</td>
              <td>Gestiones</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.personas.map(

                persona =>
                  <tr key={persona.id}>
                    <td>{persona.cedula}</td>
                    <td>{persona.nombres}</td>
                    <td>{persona.apellidos}</td>
                    <td>{persona.correo}</td>
                    <td>{persona.rol.tipo}</td>
                    <td>
                      <button onClick={() => this.editPersona(persona.id)} className="btn btn-info">Editar</button>
                      <button style={{ marginLeft: "10px" }} onClick={() => this.deletePersona(persona.id)} className="btn btn-danger">Borrar</button>
                    </td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default PersonaComponent