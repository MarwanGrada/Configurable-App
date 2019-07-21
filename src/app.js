import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Album from './landing.js';
import axios from 'axios';

const API = 'https://rg6zpewq4j.execute-api.us-west-2.amazonaws.com/theme/';

export class App extends React.Component {


  state={
    type  : null,
    check : 'theme', 
  }


  async componentDidMount() {
    const res = await axios.get(API);   
    const { data } = await res;    
    this.setState({ type: data.Items[0].type });
    console.log( data.Items[0].type )
  }


  handleLightSubmit= async () =>{
    await this.setState({ type : true });
    const API = 'https://rg6zpewq4j.execute-api.us-west-2.amazonaws.com/theme/'      
    const url = API;
    await axios.post(url , JSON.stringify(this.state))
    console.log( this.state.type )         
  }

  handleDarkSubmit= async () =>{
    await this.setState({ type : false });
    const API = 'https://rg6zpewq4j.execute-api.us-west-2.amazonaws.com/theme/'      
    const url = API;
    await axios.post(url , JSON.stringify(this.state))
    console.log( this.state.type )         
  }
 

  
  render() { 
  const muiTheme = createMuiTheme({palette: { type: this.state.type ? 'light' : 'dark' }});
    return (
      <MuiThemeProvider theme={ muiTheme }>
        <Album 
          onToggleDark={this.handleDarkSubmit} 
          onToggleLight={this.handleLightSubmit}
          CurrentState={this.state.type} 
          />
      </MuiThemeProvider>
    );
  }
}



export default App;
