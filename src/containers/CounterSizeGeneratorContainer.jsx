import { connect } from "react-redux";
import { updateCounterSize, resetSum } from "../action";
import CounterSizeGenerator from "../components/CounterSizeGenerator";

const mapDispatchToProps = (dispatch) => {
    return {
        updateCounterSize: (size) => { 
            dispatch(updateCounterSize(size));
        },
        resetSum: () => {
            dispatch(resetSum());
        }
    }
}

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;