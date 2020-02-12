import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cui: '',
      data:''
    };
    this.submit = this.submit.bind(this);
  }

  handleChange = event => {
    this.setState({ cui: event.target.value });
  };
  
  submit= event => {
    event.preventDefault()
    var cui = this.state.cui
    const url = `https://api.openapi.ro/api/companies/${cui}`
    fetch(url, {headers: {
      'x-api-key': 'wbZPxsx7fJnfqye3dKvURA9fgv8D-_vWE2ExqxHugbyBGS4HhA',
    }})
    .then(res => {
      return res.json()
    }).then(res => {
      this.setState({data:res})
    })
    .catch(error => {    
      console.log(error)     
    });
}


  render(){
    
  return (
        <div style={{margin:40}}>
          <form onSubmit={this.submit}>
            <label>
              CUI:
              <input type='text'  value={this.state.cui} maxLength={9} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"  />
          </form>
          <div style={{marginTop:50}}>
            <p>Bussines name: {this.state.data.denumire}</p>
            <p>Cui: {this.state.data.cif}</p>
            <p>Address: {this.state.data.adresa} </p>
            <p>Status: {this.state.data.stare}</p>
          </div>
        </div>
  );
}
}

export default App;
