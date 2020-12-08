import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { size: 0 };
    }

    onChange = (event) => {
        const size = event.target.value < 0 ? 0 : event.target.value;
        this.setState({ size: size });
        this.props.updateCounterSize(size);
        this.props.resetSum();
    }

    render() {
        const size = this.state.size;

        return (
            <div>
                <input type="number" value={size} onChange={this.onChange} min="0" />
            </div>
        );
    }
}

export default CounterSizeGenerator;