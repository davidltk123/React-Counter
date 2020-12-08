import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import CounterContainer from '../containers/CounterContainer';

class CounterGroup extends Component {  

    initArraySize = (size) => {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    };

    render() {
        const initArraySize = this.initArraySize(this.props.size);
        return (
            <div>
                {
                    initArraySize.map((value) =>
                        <CounterContainer key={uuidv4()} />
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;