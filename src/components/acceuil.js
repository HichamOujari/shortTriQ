import React,{Component,Fragment} from "react"
import logo from "../Assets/logo.png"
import Axios from 'axios'
//
class Acceuil extends Component {
    loading(i){
        document.querySelector("#btnshort").style.display="none";
        document.querySelector("#btnload").style.display="block";
    }
    shorting(e){
        e.preventDefault();
        this.loading(1);
        Axios.get("https://shorttriq-server.herokuapp.com/insert",{
            params: {
                    route:document.querySelector("#newroute").value,
                    address:document.querySelector("#lienfinal").value,
              }
        })
            .then(res=>{
                setTimeout(() => {
                    document.location.href="https://shorttriq.herokuapp.com/show/"+res.data;
                }, 2000);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        return(
            <Fragment>
                <div className="navbar">
                    <p className="title"><i className="fa logo fa-link"></i> Short<span className="soustitle">TriQ</span></p>
                    <p className="support">support US</p>
                </div>
                <form onSubmit={this.shorting.bind(this)} className="content">
                    <img  src={logo} alt="..." className="souslogo" />
                    <p className="ptitle">URL Shortener</p>
                    <p className="psoustitle">Simplify your links, track  manage them</p>
                    <input id="lienfinal" required pattern="https?://.+.+." title="Paste here you URL with lowercase" className="input shorteninput" type="text" placeholder="Paste your url and shorten it now ..."/>
                    <div id="zoneshorting">
                        <input className="input updateinput site" disabled type="text" placeholder="https://shorttriq.herokuapp.com/"/>
                        <input className="input updateinput" id="newroute" required pattern="[^' ',^'?',^'/',^'\\',]+" title="Error: delete space or '?'" type="text" placeholder="Customize Your Link"/>
                        <br></br>
                        <button className="shortenbtn" type="submit">
                            <span id="btnshort">Shorten</span>
                            <i id="btnload" className="fa fa-spinner"></i>
                        </button>
                    </div>
                    <p className="psousbtn"><i className="fa fa-info"></i> By using our service you accept the Terms and Privacy.</p>
                </form>
                <div className="footer">
                    <p className="powerd">Powered By: <span className="auteur">Oujari Hicham</span></p>
                    <p className="allright">All right reserved <span className="c"> C </span>{(new Date()).getFullYear()}</p>
                </div>
            </Fragment>
        )
    }
}

export default Acceuil