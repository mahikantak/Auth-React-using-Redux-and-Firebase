import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class loggedSuccess extends Component {
    render () { 
        return (
            <div className="text-center">
               <h1>Congratulation you have successfully registered!!!</h1>
                <Link to="/login">Login</Link>
            </div>
            
            
        );
    }
}

export default loggedSuccess;