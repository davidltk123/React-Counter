import { connect } from "react-redux";
import CounterGroup from "../components/CounterGroup";

const mapStateToProps = status => ({
    size: status.size
})

const CounterGroupContainer = connect(mapStateToProps, null)(CounterGroup);

export default CounterGroupContainer;