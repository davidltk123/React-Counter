import React, { Component } from 'react';
import CounterGroupContainer from "../containers/CounterGroupContainer";
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupSumContainier from '../containers/CounterGroupSumContainer';

class MultiCounter extends Component {

    render() {
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