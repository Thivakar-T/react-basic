import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class Employee extends Component {
    constructor(props) {
        super(props);
        console.log("id+" + this.props.match.params.id)
        this.state = {
            id: this.props.match.params.id,
            email: "",
            firstName: "",
            lastName: "",
        };
        this.changeEmailHandler = this.changeEmailHandler.bind(this)
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.submit = this.submit.bind(this)

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value })
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value })
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    
    submit = (e) => {
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,

        }
        console.log(JSON.stringify(employee))
        if (this.state.id === "add") {
            EmployeeService.createEmployee(employee).then(res => {
                console.log("success")
                this.props.history.push('/list');
            })
        } else {
            EmployeeService.updateEmployee(this.state.id, employee).then(res => {
                console.log("success")
                this.props.history.push('/list');
            })
        }
    }

    componentDidMount() {
        console.log(this.state.id)
        EmployeeService.getId(this.state.id).then(res => {
            let employee = res.data
            console.log(employee)
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email: employee.email,
            })
        })
    }
    getTitle() {
        if (this.state.id === "add") {
            return <h3>Create</h3>
        }
        else {
            return <h3>Update</h3>
        }
    }
    render() {
        return (
            <div>
                <div className='row'>
                    {
                        this.getTitle()
                    }
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                            value={this.state.email} onChange={this.changeEmailHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName"
                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                    </div>
                    <div className="mb-3 form-check">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName"
                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Employee;
