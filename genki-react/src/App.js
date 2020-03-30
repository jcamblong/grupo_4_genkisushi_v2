import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null,
      isLoaded: false,
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
            isLoaded: true,
            data: result.data
            })
        })
      .catch ( error => console.log (error))
  }
  
  render () {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="App">
      <ul>
      {data.map(a => (<li key={a.id}> {a.name} {a.id} {a.category_id}</li>))}
    </ul>
      </div>
    )
  }
}
}

export default App;
