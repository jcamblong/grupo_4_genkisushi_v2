import React, {Component} from 'react';

class TableUser extends Component {
    constructor (props) {
      super (props);
      this.state = {
        meta: "",
        users: []
      };
    }
  
    componentDidMount () {
      fetch ("http://localhost:3000/api/users")
        .then (res => res.json())
        .then ((result) => { this.setState (
          {
            meta: result.meta,
            users: result.users
          }
          )})
        .catch ( error => console.log (error))
    }
    
    render () {
      const { error, users} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
            return (
              <div className="col-lg-4 mb-4">	
              <div className= "card shadow mb-4">
                <div className="card-header py-3">
				          <h6 className="m-0 font-weight-bold text-primary">Usuarios en la Base de Datos</h6>
			          </div>
              
              <div className="card-body">
											
								<div className= "table-responsive">	
                <table className="table table-hover" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Apellido</th>
                          <th>Email</th>
                          <th>Role_Id</th>
                          <th>Orden</th>
                          <th>Total Orden</th>
                        </tr>
                    </thead>

                    <tbody>
                      {users.map ((u, i) => (
                        <tr>
                          <td key={i}>{u.id}</td>
                          <td key={i}>{u.first_name}</td>
                          <td key={i}>{u.last_name}</td>
                          <td key={i}>{u.email}</td>
                          <td key={i}>{u.roles.name}</td>
                          {
                            u.orders.map((o, i) => (
                              <td key={i}>{o.id}</td>
                            ))
                          }
                          {
                            u.orders.map((o, i) => (
                              <td key={i}>{o.purchase_total}</td>
                            ))
                          }
                        </tr>
                        ))}   
                    </tbody>
                </table>
                </div>

					</div>
				</div>
        </div>
            )
}
    }   
}
export default TableUser;