import {getApi} from "./Redux/Redux.selectors";
import {connect} from "react-redux";


function Navbar (props){
    return<div></div>
}

const mapStateToProps = (state) => {
    return {api:getApi(state) }
}

export default connect(mapStateToProps)
(
    Navbar
)