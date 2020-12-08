import React, { Component } from 'react';
import CounterGroupContainer from "../containers/CounterGroupContainer";
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupSumContainier from '../containers/CounterGroupSumContainer';

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

        return (
            <div>
                <CounterSizeGeneratorContainer />
                <CounterGroupSumContainier />
                <CounterGroupContainer />
            </div>
        );
    }
}

export default MultiCounter;