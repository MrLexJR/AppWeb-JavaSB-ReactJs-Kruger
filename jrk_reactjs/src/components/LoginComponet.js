import React, { Component } from 'react'

class LoginComponet extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div><br/><br/>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <br/><h3>Iniciar sesion</h3><br/>
                  <div className="form-group">
                    <label>User o Correo</label>
                    <input type="email" className="form-control" placeholder="Ingrese usuario" />
                  </div>

                  <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" />
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginComponet
