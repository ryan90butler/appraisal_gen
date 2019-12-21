import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    }
    }

    onNameChange(event) {
      this.setState({name: event.target.value})
      }

      onEmailChange(event) {
      this.setState({email: event.target.value})
      }

      onMessageChange(event) {
      this.setState({phone: event.target.value})
      }

    handleSubmit(event) {
    }

  render(){
    return (
      <div className="Search-main">
   <form onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label>Name </label>
        <br/>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
    </div>
    <div className="form-group">
        <label>Email </label>
        <br/>
        <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
    </div>
    <div className="form-group">
        <label>Phone </label>
        <br/>
        <input type="tel" className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}
}

export default Search;