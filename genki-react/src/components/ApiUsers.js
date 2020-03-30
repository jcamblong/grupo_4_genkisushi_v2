import React, {Component} from 'react';

class ApiUsers extends Component {
  constructor (props) {
    super (props);
    this.state = {
      error: null,
      users: []
    };
  }

  componentDidMount () {
    fetch ("http://localhost:3000/api/users")
      .then (res => res.json())
      .then (
        (result) => { 
          this.setState (
            {
            users: result.users
            })
        })
      .catch ( error => console.log (error))
  }
  
  render () {
    const { error, users } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
    return (
      <div className="App">
        <ul>
          {users.map(u => (<li key={u.id}> {u.id} {u.first_name} {u.last_name} {u.email} </li>))}
        </ul>
      </div>
    )
  }
}
}

export default ApiUsers;
