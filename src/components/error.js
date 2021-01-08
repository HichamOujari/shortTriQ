import React,{Component} from "react"

class Error extends Component {
    componentDidMount(){
        document.querySelector("#acceuil").addEventListener("click",()=>{
            document.location.href="/home"
        })
        document.querySelector("#refresh").addEventListener("click",()=>{
            document.location.reload();
        })
    }
    render(){
        document.title=document.title.replace("welcome","Error404")
        return(
            <div className="error">
                <p className="errortitle"> SORRY</p>
                <p className="errorsoustitle">PAGE NOT FOUND</p>
                <p className="errordetail">Either something Get Wrong or the page Doesn't Exist anymore</p>
                <button className="btnerror" id="acceuil">Acceuil</button>
                <button className="btnerror" id="refresh">Refresh</button>
            </div>
        )
    }
}

export default Error