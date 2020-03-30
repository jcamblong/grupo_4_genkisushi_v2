import React, {Component} from 'react';

class ApiProducts extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null,
      data: []
    };
  }

  componentDidMount () {
    fetch ("http://localhost:3000/api/products")
      .then (res => res.json())
      .then (
        (result) => { 
          this.setState (
            {
            data: result.data
            })
        })
      .catch ( error => console.log (error))
  }
  
  render () {
    const { error, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
    return (
      <div className="App">
        <ul>
          {data.map(p => (<li key={p.id}> {p.id} {p.name} {p.categories.name} {p.product_types.name} {p.product_types.quantity} {p.product_types.price}</li>))}
        </ul>
      </div>
    )
  }
}
}

export default ApiProducts;
