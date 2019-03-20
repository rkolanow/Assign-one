import React, { Component } from 'react';

import styles from './App.module.css';
import ToolBar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from './components/Card/Card';
import Counter from './components/Counter/Counter';

import Button from './components/Button/Button';
import ItemForm from './components/Form/Form';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';

import Snackbar from './components/Snackbar/Snackbar';
import TableItems from './components/TableItems/TableItems';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      fromChild: '',
      dataArray:[],
      counterChild: 0,
      showTable: false,
      
     
    }
  this.handleCountIncrease = this.handleCountIncrease.bind(this);
  this.handleCountDecrease = this.handleCountDecrease.bind(this);
  this.handleData = this.handleData.bind(this);
  this.handleArray = this.handleArray.bind(this);
  
};

//get array from form.js
handleArray=(data)=> {
  this.setState({
    dataArray: data,
    showTable : true,
    counter: 0
  });

}

//getting counter functions from counter.js
increaseCount() {
  this.setState((prevState) => {
      return {counter: prevState.counter + 1}
  });
 
}

  decreaseCount() {
    this.setState((prevState) => {
        return {counter: prevState.counter - 1}
    });
  }
  
//get field input from form.js

handleData(data) {
  this.setState({
    fromChild: data,
    showTable : true
  });
}

//counter functions in app.js

handleCountIncrease(data) {
  this.setState({
    counterChild: data + 1
  });
 
}

handleCountDecrease(data) {
  this.setState({
    counterChild: data - 1
  });
 
}

//showing/hiding arrow down button in counter.js
toggleButton () {
  const { showButton } = this.state;
  this.setState({
    showButton: !showButton,
  });
}


  render() {
  
    return (
    <div className={styles.app}>


      <AppBar position="static" >
      <ToolBar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
            COUNTERAPP
          </Typography>
          </ToolBar>
      </AppBar>
      
      <div>
        <Grid container spacing={16}>
        <Grid item xs={4}>
        <Card className={styles.counter}>
        <Counter 
        handleCounterIncrease = {this.handleCountIncrease}
        handleCounterDecrease = {this.handleCountDecrease}
       
       />
      </Card>
      </Grid>
     
        <Grid item xs={4}>
        <Card className={styles.inventory}>

        {!this.state.showTable ? 'No data available': <TableItems entries={this.state.dataArray}></TableItems> }
           
        </Card>
        </Grid>
        </Grid>
      </div>

      
      
        <Grid container spacing={16}>
        <Grid item xs={4}>
          
          <Card classname={styles.form}>
          
          <ItemForm 
            handleSubmit={this.handleSubmit} handleChange={this.handleChange} 
            handlerFromParent={this.handleData}
            handlerForCounter = {this.state.counterChild}
            handleArray = {this.handleArray}></ItemForm>
            <br />
       </Card>

       <Snackbar />
     
      </Grid>
      </Grid>
     
  
      </div>

      
  
    )}
  

  
  
};
export default App




  
