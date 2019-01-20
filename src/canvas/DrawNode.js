import React from 'react';

export default class DrawNode extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ready:true,//ready todraw
            iniXc:0,//mouse position on click
            iniYc:0,
            tmpOffX:0,//tmp offset when moving layer
            tmpOffY:0,
            move:false//is moving?
        }
        this.mouseDown=this.mouseDown.bind(this)
        this.mouseUp=this.mouseUp.bind(this)  
        this.drag=this.drag.bind(this)
    }
    mouseDown(event){//set initial client value and stop propagation
        event.stopPropagation()
        this.setState({
            iniXc:event.clientX,
            iniYc:event.clientY,
            move:true
        })
    }
    mouseUp(event){
        event.stopPropagation()
        if(!this.state.move){
            return
        }
        this.props.info.moveHor(this.state.tmpOffX)//save the tmp offset in the structure
        this.props.info.moveVer(this.state.tmpOffY)
        this.setState({
            tmpOffX:0,
            tmpOffY:0,//reset tmp offset
            move:false
        })
        this.props.setUp()//refresh data
        
    }
    drag(event){
        event.stopPropagation()
        if(!this.state.move){
            return null
        }
        //console.log(event.clientY)
        this.setState({
            tmpOffX:event.clientX-this.state.iniXc,//wghen moving change tmpoffx and y
            tmpOffY:event.clientY-this.state.iniYc
        })
    }

    render(){
        if(!this.state.ready){
            return null
        }
        //const arr = this.state.nodes.children;
        //console.log('translate('+(this.props.info.offx+this.state.tmpOffX)+'px,'+(this.props.info.offy+this.state.tmpOffY)+'px)')
        const canvStyle={
            position:'relative',
            width:this.props.info.width + 'px',
            height:this.props.info.height + 'px',
            backgroundColor:this.props.info.color,
            transform:'translate('+(this.props.info.offx+this.state.tmpOffX)+'px,'+(this.props.info.offy+this.state.tmpOffY)+'px)',//apply translation
        }
        //draw layer with event handlers 
        return <div style={canvStyle} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseMove={this.drag} onMouseLeave={this.mouseUp}>
                    {this.props.info.children.map((value,i)=>{//map children and call this component recursiveli until chuilds end
                        return <DrawNode key={this.props.myKey+"+"+i}info={value}myKey={this.props.myKey+"+"+i} setUp={this.props.setUp}/>
                    })

                    }
               </div>
    }
}
/*{this.props.info.children.map((value,i)=>{
                        console.log("due");
                        return <DrawNode info={value}/>
                    })}*/
                    //