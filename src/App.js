import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  
  render() {
    const users = [
      {name: "Taro",age:32},
      {name: "Hanako",age:27},
      {name: "hana" ,age:7},
    ]
    return (
      <div>
        {
          users.map((user,index) => {
            return <User name={user.name} age={user.age} key={index} />
          })
        }
      </div>
    );
    
  }
}
const User = (props) => {
  return <div>名前は{props.name}、年齢は{props.age}です</div>
}

User.propTypes = {
 name: PropTypes.string,
 age: PropTypes.number
}

export default App;
