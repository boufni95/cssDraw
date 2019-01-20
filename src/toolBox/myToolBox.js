import React from 'react';
import ToolIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

export default class ToolBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            trasX:0,//info necessary for movement
            trasY:0,
            iniXc:0,
            iniYc:0,
            baseX:0,
            baseY:0,
            move:false,//is moving?
            open:false//is open?
        }
        this.mouseDown=this.mouseDown.bind(this)
        this.mouseUp=this.mouseUp.bind(this)    
        this.drag=this.drag.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            open:!this.state.open
        })
    }
    mouseDown(event){//init data for movement
        event.stopPropagation()
        this.setState({
            iniXc:event.clientX,
            iniYc:event.clientY,
            move:!this.state.open
            
        })
    }
    drag(event){
        event.stopPropagation()
        if(!this.state.move){
            return null
        }
        console.log(event.clientY)
        this.setState({
            trasX:this.state.baseX-this.state.iniXc+event.clientX,//handle movement
            trasY:this.state.baseY-this.state.iniYc+event.clientY,
        })
    }
    mouseUp(event){
        event.stopPropagation()
        this.setState({
                    move:false,
                    baseX:this.state.trasX,//save data after movement
                    baseY:this.state.trasY
                        })
    }
    render(){
        
        const sty={
            position:'fixed',
            transform: 'translate('+this.state.trasX+'px,'+this.state.trasY+'px)',
            zIndex:2
        }
        return <div style={sty}  onMouseLeave={this.mouseUp} onMouseMove={this.drag} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>
            <IconButton onClick={this.handleClick}>
                <ToolIcon/>
            </IconButton>
            {(!this.state.open)?null:<div>
                {React.Children.map(this.props.children,(child,i)=>{//return all children
                    return child
                })}
            </div>}
        </div>
    }
}