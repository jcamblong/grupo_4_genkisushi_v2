import React, {Component} from 'react';
import Card from './Card';

class ApiCallUsers extends Component {
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
      const name = "Usuarios en la Base de Datos";
      const { error, meta } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
          <Card name= {name} count= {meta.count} />
        );
    }
  }
}

export default ApiCallUsers;