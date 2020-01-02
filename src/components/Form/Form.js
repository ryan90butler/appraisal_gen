import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      submitted: false
    }
        this.changeSubmit = this.changeSubmit.bind(this);

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

      changeSubmit(){
    this.setState({
      submitted: true
    })
    
  }

  render(){
    return (
      <div className="Search-main">
   <form onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label>Name </label>
        <br/>
        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} required/>
    </div>
    <div className="form-group">
        <label>Email </label>
        <br/>
        <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
    </div>
    <div className="form-group">
        <label>Phone </label>
        <br/>
        <input type="tel" className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} required pattern=".{10,}"/>
    </div>
        <div className="form-group">
        <label>Zip </label>
        <br/>
        <input type="number" className="form-control" value={this.state.message} onChange={this.onMessageChange.bind(this)} required pattern="[0-9]*"/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={this.changeSubmit}>Submit</button>
    </form>
    </div>
  );
}
}

export default Form;