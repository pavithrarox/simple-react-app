import React from "react";
import { render } from "react-dom";


class App extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12"> <h1>Hello!</h1></div>
                </div>
               
            </div>
            
        );
    }

}


//should be the name of the class
render(<App/>, window.document.getElementById("app"));