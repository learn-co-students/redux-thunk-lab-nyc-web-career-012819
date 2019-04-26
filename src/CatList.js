import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {
  renderCats = () => {
    return this.props.catPics.map(cat => <img src={cat.url} key={cat.id} />)
  }

  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    );
  }
}

export default connect()(CatList);