import React, {Component} from 'react';

class TableProduct extends Component {
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
        .then ((result) => { this.setState (
          {
            meta: result.meta,
            data: result.data
          }
          )})
        .catch ( error => console.log (error))
    }
    
    render () {
      const { error, data, meta} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
            return (
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Categoría</th>
                          <th>Tipo de Producto</th>
                          <th>Cantidad</th>
                          <th>Precio</th>
                        </tr>
                    </thead>

                    <tbody>
                      {data.map (p => (
                        <tr>
                          <td key={p.id}>{p.id}</td>
                          <td key={p.id}>{p.name}</td>
                          <td key={p.id}>{p.categories.name}</td>
                          <td key={p.id}>{p.product_types.name}</td>
                          <td key={p.id}>{p.product_types.quantity}</td>
                          <td key={p.id}>{p.product_types.price}</td>
                        </tr>))}   
                    </tbody>
                </table>
            )
}
    }   
}
export default TableProduct;
