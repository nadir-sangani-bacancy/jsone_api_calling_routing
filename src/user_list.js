import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';


class User_list extends React.Component{

    render(){
        let data = require("./students_data.json");
        
        return(
            <div className="user_list">
                <h2>User List</h2>
                {
                    data.map(user => {
                        return( 
                        <Link to={`/user/${user.id}/info`}>
                            <div>{user.first_name} {user.last_name}</div>
                        </Link>);
                    })
                }
            </div>
        );
    }
}
export default User_list;