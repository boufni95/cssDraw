import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Canvas from './canvas/Canvas';
import NTypes from './nodeType';
import ToolBox from './toolBox/myToolBox';
import LayersContainer from './toolBox/LayersContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
        canvasCreated:false,
        nodes:null,//the structure is saved here
    }
    this.handleCanvas=this.handleCanvas.bind(this);
    this.setUp=this.setUp.bind(this);
  }
  setUp(){
    this.setState({nodes:this.state.nodes})//refresh data

  }
  handleCanvas(state){//create canvas with user info
    this.setState({
      canvasCreated:true,
      infoCanv:state,
      nodes:[new NTypes(state.name,state.width,state.height,state.bgCol)]
    })
  }
  render() {
    const center={
      textAlign:'center',
  }
  //create the page
    return (
      <div style={center}>
      
        <Header CreateCanvas={this.handleCanvas}/>
        {(!this.state.canvasCreated)?null:<div>
                                            <ToolBox>
                                              <LayersContainer info={this.state.nodes} setUp={this.setUp}/>
                                            </ToolBox>
                                            <Canvas info={this.state.nodes}setUp={this.setUp}/>
                                          </div>}
        
      </div>
      
    );
  }
}

export default App;
