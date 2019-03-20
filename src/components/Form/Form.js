import React, { Component } from 'react';
import styles from './Form.module.css';


class ItemForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
      inputField: '',
      items : [],
    }

      this.handleChange = this.handleChange.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.handleArray = this.handleArray.bind(this);
     

    };


    submitHandler(e) {
      e.preventDefault();
      if (this._inputElement !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now(),
          counter: this.props.handlerForCounter
      };

     this.state.items.push(newItem)
    this.setState(this.state)   
    

    }
    this._inputElement.value = "";
   
    this.props.handlerFromParent(this.state.inputField);
    this.setState({
     inputField: ''
   })
  }
   
    
    handleChange(e) {
      this.setState({
        inputField: e.target.value,
        inputText: e.target.value
      });
    }

    handleArray() {

      this.props.handleArray(this.state.items);

   }
  
    render() {
      return (


        <div><br />
        <form onSubmit={(e)=>{
          this.submitHandler(e);
          this.handleArray(this.state.items);
          }
         }>
        <input 
          type="text" 
          value={this.state.inputField} 
          onChange={this.handleChange} 
          className={`${styles['field']}`} 
          ref={(a)=>this._inputElement =a}
          placeholder ='Enter description'
         
          />
       
        <input type="submit" value="Submit" className={`${styles['button']}`} />
        </form>
  
        </div>
     
      );
    };
  }


 
  
  export default ItemForm;   


  


  
