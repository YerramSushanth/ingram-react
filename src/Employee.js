import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={
            employees:[], 
            isLoaded: false,}
    }

    refreshList(){
        fetch('https://localhost:44380/api/employee')
        .then(Response=>Response.json())
        .then(data=>{
            this.setState({
                isLoaded:true,
                employees:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        var {isLoaded, employees} = this.state;
        if(!isLoaded){
            return <div>Loading....</div>
        }
        return(
            <div className='mt-5 d-flex justify-content-left'>
                <Table className='mt-4' striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>DepartmentName</th>
                            <th>DateOfJoining</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee=>
                            <tr key={employee.employeeId}>
                                <td>{employee.employeeId}</td>
                                <td>{employee.employeeName}</td>
                                <td>{employee.department}</td>
                                <td>{employee.dateOfJoining}</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}