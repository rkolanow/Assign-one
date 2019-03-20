import React, { Component } from 'react';
import styles from './Counter.module.css';
import Icon from '@material-ui/core/Icon';
import Button from '../Button/Button';



class Counter extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showButton: true,
            
        }
        this.toggleButton = this.toggleButton.bind(this);
    }
 
    toggleButton () {
        const { showButton } = this.state;
        this.setState({
          showButton: !showButton,
        });
    }

    increaseCount() {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
          
         });
        this.setState({ showResults: false });
       
    }
 
    decreaseCount() {
        this.setState((prevState) => {
            return {counter: prevState.counter - 1}
        });
      
    }
    
    submitHandlerIncrease() {

         this.props.handleCounterIncrease(this.state.counter);

      }

    submitHandlerDecrease() {

        this.props.handleCounterDecrease(this.state.counter);

     }


    render() {

        const { showButton } = this.state;

        return (
            <div className={styles.counter}>
              <p>
              <buttonup 
              onClick={()=>{             
               this.increaseCount();
               this.submitHandlerIncrease();
                }}
             
              className={styles.buttonup}>

                <Icon fontSize='large'>keyboard_arrow_up</Icon>
                </buttonup></p>
                <h2>{this.state.counter}</h2>

               {showButton && this.state.counter> 0 ? 
               <buttondown 
               onClick={()=>{             
                this.decreaseCount();
                this.submitHandlerDecrease();
                 }}
               className={styles.buttondown}> <Icon fontSize='large'>keyboard_arrow_down</Icon></buttondown> : <br/>}
        
        
        
                
                

              <div>
       
      </div>



            </div>
             
        );
    }
 
}

export default Counter;
