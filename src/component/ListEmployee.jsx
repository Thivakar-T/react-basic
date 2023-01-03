import React from "react";
import EmployeeService from "../service/EmployeeService";
class ListEmployee extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            employee:[]
        };
        this.add=this.add.bind(this)
        this.update=this.update.bind(this)
        this.delete=this.delete.bind(this)
    }
    componentDidMount(){
        EmployeeService.getEmployee().then(res=>{
            console.log(res)
            // employee=res.data
            this.setState({employee:res.data})
        })
    }
    add(){
        console.log("sglj")
        let id;
        this.props.history.push(`/add/add`);
    }
    update(id){
        console.log(id)
        this.props.history.push(`/add/${id}`);
    }
    delete(id){
        console.log(id)
        EmployeeService.delete(id).then(res=>{
            console.log(res)
            window.location.reload(false);
        })
    }
    render() {
        
        return (
            <div className="container">
                <div className="row">
                <div className="">
                    <button  onClick={this.add}>add</button>
                </div>
                </div>
                 <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            this.state.employee.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                    <button  onClick={()=>this.update(employee.id)}>Update</button>
                                    <button  onClick={()=>this.delete(employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                           }
                           
                        </tbody>
                    </table>
                </div> 
            </div>
        );
    }
}

export default ListEmployee;