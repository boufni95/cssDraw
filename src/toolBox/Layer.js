import React from 'react';
import ToolIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Selector from './Selector';

export default class Layer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
        this.moveMutt=this.moveMutt.bind(this)
    }
    handleClick(event){
        event.stopPropagation()
        this.props.selFun(this.props.myKey)//make this layer the selected layer
    }
    moveMutt(event){
        event.stopPropagation()
        this.props.info.moveHor(2)//move this layer in the structure
        this.props.setUp()//update data

    }
    render(){
        const bord=(this.props.selVal==this.props.myKey)?2:0
        const sty={
            width:100-this.props.lvl*5+'%',
            marginLeft:this.props.lvl*5+'%',
            border:bord+'px solid blue',//border is applied if this layer is selected
            backgroundColor:this.props.info.color,
        }
        return <div style={sty} onClick={this.handleClick}>
                    <div>
                        
                        <IconButton>
                            <ToolIcon onClick={this.moveMutt}/>
                        </IconButton>
                        <IconButton>
                            <ToolIcon/>
                        </IconButton>
                    </div>
                    {this.props.info.children.map((item,i)=>{
                        return <Layer info={item} key={this.props.myKey+'+'+i} myKey={this.props.myKey+'+'+i} lvl={this.props.lvl+1} selFun={this.props.selFun}selVal={this.props.selVal} setUp={this.props.setUp}></Layer>
                    })}
                </div>
    }
}/**/