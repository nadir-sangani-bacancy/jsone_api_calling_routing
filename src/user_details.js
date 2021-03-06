import React from 'react';
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class User_details extends React.Component {


    render() {
        let id = this.props.match.params.id;
        let data = require("./students_data.json");
        var userdata = data.find(x=>x.id == `${id}`);
        return (
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

            </div>
        )
    }
}
export default User_details;