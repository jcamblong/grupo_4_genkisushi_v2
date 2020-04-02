import React, {Component} from 'react';
import Card from './Card';

class ApiCallProductos extends Component {
  constructor (props) {
    super (props);
      this.state = {
        meta: "",
        data: []
      };
  }
  
  componentDidMount () {
    fetch ("http://localhost:3000/api/products")
      .then (res => res.json())
      .then ((result) => {this.setState (
        {
        data: result.data,
        meta: result.meta
        }
        )})
      .catch ( error => console.log (error))
    }
    
    render () {
      const name = "Productos en la Base de datos"
      const { error, meta } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
          <Card name= {name} count= {meta.count}/>
        );
    }
  }
}
export default ApiCallProductos;