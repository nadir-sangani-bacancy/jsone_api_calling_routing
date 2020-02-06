import React from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';

class User_info extends React.Component{

    render(){
        let id = this.props.match.params.id;
        let data = require("./students_data.json");
        var userdata = data.find(x=>x.id == `${id}`);
        return(
            <div className="user_details">
                <h2>User Details</h2>
                <Link to="/user">
                    <Button variant="warning" renderAs="button">
                        home</Button>
                </Link>
                <Link to={`/user/${id}/info`}>
                    <Button variant="warning" renderAs="button">
                        Information</Button>
                </Link>
                <Link to={`/user/${id}/marks`}>
                    <Button variant="warning" renderAs="button">
                        marks</Button>
                </Link><br/><br/><br/>

                
                {
                    <div>
                        <p>First Name : {userdata.first_name}</p>
                        <p>Last Name : {userdata.last_name}</p>
                        <p>Father Name : {userdata.father}</p>
                        <p>Mother Name : {userdata.mother}</p>
                        <p>DOB : {userdata.DOB}</p>
                        <p>Email : {userdata.email}</p>
                        <p>Gender : {userdata.gender}</p>
                        <p>Standard : {userdata.standard}</p>    
                    </div>
                }
            </div>  
        )
    }
}
export default User_info;