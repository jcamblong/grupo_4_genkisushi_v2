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
      const { error, users, meta} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
            return (
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                      {users.map (u => (
                        <tr>
                          <td key={u.id}>{u.id}</td>
                          <td key={u.id}>{u.first_name}</td>
                          <td key={u.id}>{u.last_name}</td>
                          <td key={u.id}>{u.email}</td>
                          <td key={u.id}>{u.roles.name}</td>
                          <td key={u.id}>{u.orders.id}</td>
                          <td key={u.id}>{u.orders.purchase_total}</td>
                        </tr>))}   
                    </tbody>
                </table>
            )
}
    }   
}
export default TableUser;