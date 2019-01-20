import React from 'react';
import DrawNode from './DrawNode';
import NTypes from '../nodeType';
export default class Canvas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ready:false
        }
    }
    //props
      //name
      //height
      //width
      //color
      componentDidMount(){
          //this.state.nodes[0].children.push(new NTypes('name',40,40,'#FF00FF')) 
          //this.setState({nodes:JSON.parse(JSON.stringify(this.props.info))})
            new Promise((resolve,reject)=>{
                    this.props.info[0].pushHere(new NTypes('name',40,40,'#FF00FF'))  //add a new object for test reasons
                    resolve('gg')
          }).then((val)=>{
            console.log(val)
            this.setState({ready:true})  //when is ready turn on the boolean
          })
      }
      render(){
          const canvStyle={
              position:'relative',
              //transform:'traslate('+window.screenX/2-this.props.info[0].width/2+'px,0px)',
              marginTop:'5%',
          }
          return <div style={canvStyle}>
                    {this.props.info && this.props.info.map((value,i)=>{//maps the elements to draw
                        //console.log(value.children);
                        return (!this.state.ready)?null: <DrawNode key={i}info={value}myKey={i} setUp={this.props.setUp}/>
                        //if its ready, create a node whith the info the key and a function to refresh the structore when data change
                    })}
                 </div>
      }

}