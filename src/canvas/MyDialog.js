import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
class SimpleDialog extends React.Component {
    //props
      //CloseDial
      //OpenDial
      //Done
    constructor(props){
        super(props);
        this.state={//default props for layer 0
            name:'',
            width:'300',
            height:'200',
            bgCol:'#FFFF00',
            fail:false,
            errorMsg:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkDone = this.checkDone.bind(this);
      
    }
    handleChange = prop => event => {//handle input change
        this.setState({ [prop]: event.target.value });
    }
    checkDone(){//check if data recived is acceptable
        if(!isNaN(this.state.width)){
            if(!isNaN(this.state.height)){
                if(parseInt(this.state.width) <1000){
                    if(parseInt(this.state.height) <1000){
                        if(this.state.name != ''){
                            this.props.Done(this.state);
                            this.props.CloseDial();
                            
                        }else{
                            this.setState({
                                fail:true,
                                errorMsg:'name is void'
                            })
                        }
                    }else{
                        this.setState({
                            fail:true,
                            errorMsg:'height >1000'
                        })
                    }
                }else{
                    this.setState({
                        fail:true,
                        errorMsg:'width >1000'
                    })
                }
            }else{
                this.setState({
                    fail:true,
                    errorMsg:'height is NaN'
                })
            }
        }else{
            this.setState({
                fail:true,
                errorMsg:'width is NaN'
            })
        }
        
    }
    
    render(){
        
        return  <Dialog onClose={this.props.CloseDial} open={(this.props.OpenDial)?true:false} PaperProps={{style:{width:'500px',height:'500px'}}}>
                    <DialogTitle id="simple-dialog-title" >
                        <Typography variant='h2' align='center' color = 'primary'>
                            title
                        </Typography>
                    </DialogTitle>
                    <div >
                        <GridList cellHeight='auto' cols={2} spacing={0}>
                            <GridListTile>
                                <TextField required onChange={this.handleChange('name')} InputProps={{value:this.state.name}} label='name' color='primary' fullWidth={true} />
                            </GridListTile>
                            <GridListTile>
                                <TextField required onChange={this.handleChange('width')} InputProps={{value:this.state.width}} label='width' color='primary' fullWidth={true}/>
                            </GridListTile>
                            <GridListTile>
                                <TextField required onChange={this.handleChange('height')} InputProps={{value:this.state.height}} label='height' color='primary' fullWidth={true}/>
                            </GridListTile>
                            <GridListTile>
                                <TextField required onChange={this.handleChange('bgCol')} InputProps={{value:this.state.bgCol}} label='BG Color' color='primary' fullWidth={true}/>
                            </GridListTile>
                        </GridList>
                        <div style={{textAlign:'center',padding:5}}>
                            <Button onClick={this.checkDone}   color = 'primary'>done</Button>
                        </div>
                        {(!this.state.fail)?null:    <Typography variant='h6' align='center' color = 'secondary' >
                                                            {this.state.errorMsg}
                                                        </Typography>}
                    </div>
                    
                </Dialog>
    }
}
export default SimpleDialog;