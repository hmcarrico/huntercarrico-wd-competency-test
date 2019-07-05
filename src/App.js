import React from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
  console.log('REDUX USER===>',props.user)
  return (
    <div>
      <Header />
      {routes}
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(App);
