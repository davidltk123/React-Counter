import React, { Component } from 'react';
import Counter from './Counter';
import { v4 as uuidv4 } from "uuid";

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {initArraySize : []};
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.size !== this.props.size) {
            this.setState({
                initArraySize : this.initArraySize(this.props.size)
            });
        }
    }

    //change later
    initArraySize = (size) => {
        const number = size.length > 0 ? parseInt(size) : 0;
        return Array.from(Array(number).keys()).map(value =>  uuidv4());
    };

    increase = () => {
        this.updateSum(1);
    }

    decrease = () => {
        this.updateSum(-1);
    }

    updateSum = (value) => {
        this.props.sum(value);
    }

    render() {
        const initArraySize = this.state.initArraySize;
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