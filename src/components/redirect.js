import React,{Component} from "react"
import Error from "./error"
import Axios from 'axios'
import Acceuil from "../components/acceuil"
import img from "../Assets/loading.gif"
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
            Axios.get("https://shorttriq-server.herokuapp.com/check/"+this.props.match.params.path)
            .then(res=>{
                if(res.data.isExist===1){
                    this.setState({
                        lien:res.data.lien,
                    })
                    console.log("&&&&&")
                    setTimeout(() => {
                        document.location.href=this.state.lien
                    }, 5000);
                }else{
                    document.location.href="https://shorttriq.herokuapp.com/error"
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
        if(this.props.match.params.path==="error"){
            return(
                < Error />
            )
        }
        if(this.props.match.params.path==="show"){
            return(
                <Acceuil />
            )
        }
        return(
            <div className="redirect">
                <img className="redirectimg" src={img}  alt=""/>
                You will be redirected in 5 seconds or click <a className="redirecthere" href={this.state.lien}>here</a>
            </div>
        )
    }
}

export default Redirect