import React, { Component } from 'react';
import ItemForm from '../Form/Form';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputField: "",
            showResults: false,
            fromChild: '',
            
        }
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton () {
        const { showResults } = this.state;
        this.setState({
            showResults: !showResults,
        });
    }
    render() {

        const { showResults } = this.state;

        return (
            <div >

        {showResults ? <div> "No results."</div> : 
        <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
          
           
          />
        ))}
      </ul> 
        }

        </div>

    );
    }

}

export default List;


