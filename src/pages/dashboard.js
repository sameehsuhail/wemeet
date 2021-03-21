import React from 'react';

import { Table } from 'reactstrap';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh',
                color: '#343A40',
            }}
        >
            <Table size="sm" className="ongoing">
               
               
                <tbody>
                    <tr>
                        
                        <td>Task 1 dsfsdfdsfsdfsfdsfsd</td>

                    </tr>
                    <tr>
                        
                        <td>Task 1</td>

                    </tr>
                    <tr>
                        
                        <td>Task 1</td>

                    </tr>
                    <tr>
                        
                        <td>Task 1</td>

                    </tr>
                    <tr>
                     
                        <td>Task 1</td>

                    </tr>

                </tbody>
            </Table>
            
            </div>
  );
}

export default Dashboard;
