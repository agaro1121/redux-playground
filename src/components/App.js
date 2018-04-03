import React, { PropTypes } from 'react';
import Header from './common/Header';
/*
* children get passed in from subroutes in routes file
* */

class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
