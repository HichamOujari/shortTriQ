import React,{Component, Fragment} from "react"
import Error from "./error"
import Axios from 'axios'
import loading from "../Assets/loading.gif"

var urls="https://shorttriq-server.herokuapp.com/"
var url = "https://shorttriq.herokuapp.com/"

//var urls = "http://localhost:4000/"
//var url = "http://localhost:3000/"

class Redirect extends Component {
    state={
        lien : ""
    }
    componentDidMount(){
            Axios.get(urls+"check/"+this.props.match.params.path)
            .then(res=>{
                if(res.data.isExist===1){
                    document.location.href=res.data.lien
                }else{
                    document.location.href=url+"error"
                }
            })
            .catch(err =>{
                return(
                    <Error />
                )
            })
    }
    render(){
        return (
            <Fragment>
                <div className="navbar">
                    <p className="title"><i className="fa logo fa-link"></i> Short<span className="soustitle">TriQ</span></p>
                    <p className="support">support US</p>
                </div>
                <div className="content bg-none" id="loading">
                    <img className="loading-img" alt="..." src={loading} />
                </div>
            </Fragment>
        )
    }
}

export default Redirect