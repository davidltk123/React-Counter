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

const mapStateToProps = state => ({
    size: state.size
})

const CounterSizeGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;