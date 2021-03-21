import React from 'react';

import { Table } from 'reactstrap';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Left',
                height: '100vh',
                color: '#343A40',
            }}
        >
           
            <Table size="md" className="ongoing">
                <h5>Ongoing</h5>
               
                <tbody>
                    <tr>
                        
                        <td>Task 1 dsfsdfdsfsdfsfdsfsd</td>

                    </tr>
                    <tr>
                        
                        <td>fdsfsdfsdfsf</td>

                    </tr>
                    <tr>
                        
                        <td>fdsfsdfsdfsf</td>

                    </tr>
                    <tr>
                        
                        <td>fdsfsdfsdfsf</td>

                    </tr>
                   

                </tbody>
            </Table>
            <br/>
            <Table size="md" className="completed">
                <h5>Completed</h5>

                <tbody>
                    <tr>

                        <td>fdsfsdfsdfsf</td>

                    </tr>
                    <tr>

                        <td>fdsfsdfsdfsf</td>

                    </tr>
                    <tr>

                        <td>fdsfsdfsdfsf</td>

                    </tr>
                    <tr>

                        <td>fdsfsdfsdfsf</td>

                    </tr>


                </tbody>
            </Table>

            
            </div>
  );
}

export default Dashboard;
