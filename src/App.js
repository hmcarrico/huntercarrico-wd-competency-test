import React from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import { connect } from 'react-redux';
import NYC from './media/nyc.mp4';
import './App.scss';

function App(props) {
  console.log('REDUX USER===>',props.user)
  return (
    <div>
      <Header />
      <video autoPlay muted loop id="myVideo">
          <source src={NYC} type="video/mp4" />
      </video>
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
