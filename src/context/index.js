import React, { Component } from "react";
import Toast from "react-native-toast-message";

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        state: 1,
        players: [],
        result: "",
    };

    addPlayerHandler = (name) => {
        this.setState((prevState, props) => {
            players: [...prevState.players, name];
        });
    };
    removePlayerHandler = (i) => {
        let newArray = this.state.players;
        newArray.splice(i, 1);
        this.setState({ players: newArray });
    };
    nextHandler = () => {
        const { players } = this.state;
        if (players.length < 2) {
            Toast.show({
                type: "error",
                position: "bottom",
                text1: "Sorry",
                text2: "You need at least 2 players",
            });
        } else {
            this.setState(
                {
                    stage: 2,
                },
                () => {
                    this.generatePayer();
                }
            );
        }
    };

    generatePayer = () => {
        const { players } = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)],
        });
    };

    resetGameHandler = () => {
        this.setState({
            state: 1,
            players: [],
            result: "",
        });
    };

    render() {
        <MyContext.Provider
            value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                removePlayer: this.removePlayerHandler,
                next: this.nextHandler,
                getNewPayer: this.generatePayer,
                resetGame: this.resetGameHandler,
            }}
        >
            {this.props.children}
        </MyContext.Provider>;
    }
}
export { MyContext, MyProvider };
