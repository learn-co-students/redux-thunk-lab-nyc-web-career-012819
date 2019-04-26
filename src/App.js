import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {  
  componentDidMount() {
    this.props.fetchCats();
  } 

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catsPics={this.props.catPics} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
  };
}

export default connect(mapStateToProps, { fetchCats })(App);