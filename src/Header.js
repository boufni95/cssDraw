import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import CreateDial from './canvas/MyDialog';


export default class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openDraw : false,//need to remove
            canvas : false,//canvas creator open
            created:false,//canvas created
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDraw = this.handleDraw.bind(this);
        this.handleCanvas = this.handleCanvas.bind(this);
        this.handleCreated = this.handleCreated.bind(this);
    }
    handleDraw(){
        this.setState({
            openDraw : !this.state.openDraw
        })
    }
    handleCanvas(){
        this.setState({
            canvas : !this.state.canvas//open close canvas creator
        })
    }
    handleCreated(state){
        this.setState({
            created : true
        })
        this.props.CreateCanvas(state);//when data are ready, create canvas
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    //props
        //BgColor()
        //export()
        //resize()
        //move()
        render(){
            
            const styleDrawer={
                width : '20%',
                backgroundColor : '#555555'
            }
            const styleBar={
                width : (this.state.openDraw)?'80%':'100%',
                marginLeft:(this.state.openDraw)?'20%':'0%',
                transition: 'margin 0.2s, width 0.2s',
                
            }
            const styleInDraw={
                margin:'2%',
                marginTop:'5%',
                textAlign:'center'
            }
            const center={
                textAlign:'center'
            }
            return  <div>
                        <CreateDial OpenDial={this.state.canvas} CloseDial={this.handleCanvas} Done={this.handleCreated}>

                        </CreateDial>
                        <AppBar position="static" style={styleBar}>
                            
                                {(!this.state.created)
                                    ? <div style={center}>
                                        <Button onClick={this.handleCanvas}>New canvas</Button>
                                      </div>
                                    : <div>
                                        <Toolbar style={center}>
                                            <IconButton arial-label="Menu" onClick={this.handleDraw}>
                                                <MenuIcon/>
                                            </IconButton>
                                            <Typography variant="h6">
                                                Resize selected
                                            </Typography>
                                            <IconButton arial-label="Scale Up">
                                                <AddIcon/>
                                            </IconButton>
                                            <IconButton arial-label="Scale Dwon">
                                                <RemoveIcon/>
                                            </IconButton>
                                            <Typography variant="h6">
                                                Move Selected
                                            </Typography>
                                            <IconButton arial-label="Move Up">
                                                <UpIcon/>
                                            </IconButton>
                                            <IconButton arial-label="Move Down">
                                                <DownIcon/>
                                            </IconButton>
                                            <IconButton arial-label="Move Left">
                                                <LeftIcon/>
                                            </IconButton>
                                            <IconButton arial-label="Move Right">
                                                <RightIcon/>
                                            </IconButton>
                                            <Button>Export</Button>
                                        </Toolbar>
                                </div>}
                            
                        </AppBar>
                        
                            
                        
                    </div>
        }
}