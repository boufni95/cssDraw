import React from 'react';
import Layer from './Layer';
import { Paper } from '@material-ui/core';

export default class Layers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedKey:'0'//key of the selected layer
        }
        this.handleSelected=this.handleSelected.bind(this);
    }
    handleSelected(selected){
        this.setState({
            selectedKey:selected
        })
    }
    render(){
        const sty={
            width:200, 
        }
        
        return <Paper style={sty}>
            {
                (this.props.info) && this.props.info.map((val, i)=>{//map children in the structure and call component recursively
                    return <Layer info={val} key={i} myKey={i} lvl={0} selVal={this.state.selectedKey} selFun={this.handleSelected} setUp={this.props.setUp}></Layer>
                })
            }
        </Paper>
    }
}