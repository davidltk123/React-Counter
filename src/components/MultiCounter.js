import React, { Component } from 'react';
import CounterGroup from "./CounterGroup";
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, sum: 0 };
    }

    updateSize = (size) => {
        this.setState({ size: size, sum: 0 });
    };

    updateSum = (value) => {
        this.setState({ sum: this.state.sum + value });
    };

    render() {
        const size = this.state.size;
        const sum = this.state.sum;

        return (
            <div>
                <CounterSizeGenerator size={this.updateSize} />
                <CounterGroupSum sum={sum} />
                <CounterGroup size={size} sum={this.updateSum} />
            </div>
        );
    }
}

export default MultiCounter;