import React, { Component } from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = { sum: 0 };
    }

    initArraySize = (size) => {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys());
    };

    increase = () => {
        this.setState((prevState) => ({ sum: prevState.sum + 1 }));
        this.props.sum(this.state.sum);
    }

    decrease = () => {
        this.setState((prevState) => ({ sum: prevState.sum - 1 }));
        this.props.sum(this.state.sum);
    }

    render() {
        const size = this.props.size < 0 ? 0 : this.props.size;
        const initArraySize = this.initArraySize(size);

        return (
            <div>
                {
                    initArraySize.map((value) =>
                        <Counter key={value} increase={this.increase} decrease={this.decrease} />
                    )
                }
            </div>
        );
    }
}

export default CounterGroup;