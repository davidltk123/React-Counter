import { connect } from "react-redux";
import { increaseSum, decreaseSum } from "../action";
import Counter from "../components/Counter";

const mapDispatchToProps = dispatch => ({
    increase: () => { dispatch(increaseSum()) },
    decrease: () => { dispatch(decreaseSum()) }
})

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;