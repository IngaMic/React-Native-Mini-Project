import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        state: 1,
        players: [],
        result: "",
    };

    render (){
        <MyContext.Provider value={{
            state=this.state
        }}>
                {this.props.children}
        </MyContext.Provider>
    }
}
export  {
    MyContext,
    MyProvider
}