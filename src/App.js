import React, { Component } from 'react';
import Header from './Header.js';
import Display from './Display.js';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      descriptions: [],
      links: [],
      inputValue: '',
  }
 
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(e) {
  this.setState({
    inputValue: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  let queryStr = this.state.inputValue;

  let url = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${queryStr}`;
   fetch(url).then(function (res) {
    return res.json();
  }).then(function(data) {
    this.setState({
        titles: data[1],
        descriptions: data[2],
        links: data[3]
    });
  }.bind(this));
}



  render() {
    return (
      <div className="App">
       <Header />
        <div className="container py-5">
          <div className="row">
            <form onSubmit={this.handleSubmit} className="form-inline mx-auto d-block">
              <div className="form-group">
                <input onChange={this.handleChange} className="form-control mb-3 mb-sm-0 mx-sm-3" placeholder="Search Topic"></input>
                <button type="submit" className="btn btn-secondary">Submit
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </form>
          </div>
          {
            this.state.titles.map((title, i) =>
              <Display
                key={i}
                title={title}
                description={this.state.descriptions[i]}
                link={this.state.links[i]}
              />
            )
          }
      </div>
    </div>
    );
  }
} 


export default App;
