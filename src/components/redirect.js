import React,{Component,Fragment} from "react"
import Error from "./error"


class Redirect extends Component {
    render(){
        if(this.props.match.params.path==="error"){
            return(
                < Error />
            )
        }
        return(
            <Fragment>
                redirect
            </Fragment>
        )
    }
}

export default Redirect