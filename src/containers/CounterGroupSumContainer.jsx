import { connect } from "react-redux";
import CounterGroupSum from "../components/CounterGroupSum";

const mapStateToProps = status => ({
    sum: status.sum
})

const CounterGroupSumContainer = connect(mapStateToProps, null)(CounterGroupSum);

export default CounterGroupSumContainer;