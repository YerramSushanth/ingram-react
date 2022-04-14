import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export class Department extends Component{
    
    constructor(props){
        super(props);
        this.state={
            deps:[], 
            isLoaded: false,}
    }

    refreshList(){
        fetch('https://localhost:44377/Department')
        .then(Response=>Response.json())
        .then(data=>{
            this.setState({
                isLoaded:true,
                deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        var {isLoaded, deps} = this.state;
        if(!isLoaded){
            return <div>Loading....</div>
        }
        return(
            <div className='mt-5 d-flex justify-content-left'>
                <Table className='mt-4' striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>DepartmentId</th>
                            <th>DepartmentName</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.departmentId}>
                                <td>{dep.departmentId}</td>
                                <td>{dep.departmentName}</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}