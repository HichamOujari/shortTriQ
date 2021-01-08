import React,{Component, Fragment} from "react"
import Error from "./error"
import Axios from 'axios'
import Acceuil from "../components/acceuil"
var urls="https://shorttriq-server.herokuapp.com/"
var url = "https://shorttriq.herokuapp.com/"
//var urlS="http://localhost:4000/"
//var url = "http://localhost:3000/
class Redirect extends Component {
    state={
        lien : ""
    }
    componentDidMount(){
        if(this.props.match.params.path==="error"){
            return(
                < Error />
            )
        }
        if(this.props.match.params.path==="show"){
            return(
                <Acceuil />
            )
        }else{
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
    }
    render(){
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default Redirect