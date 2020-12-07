import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        const sum = this.props.sum;

        return (
            <div>
                <span>Sum of all counters' value is {sum}</span>
            </div>
        );
    }
}

export default CounterGroupSum;