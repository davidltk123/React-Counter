import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }
    onIncrease = () => {
        this.setState((preState) => ({ number: preState.number + 1 }));
    };

    onDecrease = () => {
        this.setState((preState) => ({ number: preState.number - 1 }));
    };

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease}></input>
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease}></input>
            </section>

        );
    }
}

export default Counter;