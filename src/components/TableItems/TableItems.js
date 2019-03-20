import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




class TableItems extends Component {

    createTasks(item) {
    
        return  <li key={item.key}>{item.text}{item.counter}</li>
      
        
    }
        render() {
            var todoEntries = this.props.entries;
            var listItems = todoEntries.map(this.createTasks);
            return (
                
                <Table>
                <TableHead> <p><h2>Inventory</h2></p>
                  <TableRow>
                    <TableCell align="right">Item</TableCell>
                    <TableCell align="right">Count</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {todoEntries.map(item => {
                    console.log(item);
                    return (
                      <TableRow key={item.id}>
                        <TableCell align="right">{item.text}</TableCell>
                        <TableCell align="right">{item.counter}</TableCell>
                      </TableRow>
                    );
                })}
        
            </TableBody>
            </Table>



           );
        }


    
}

export default TableItems


