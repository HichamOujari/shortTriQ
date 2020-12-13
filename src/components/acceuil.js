import React,{Component,Fragment} from "react"
import logo from "../Assets/logo.png"
import Swal from 'sweetalert2'

class Acceuil extends Component {
    loading(i){
        if(i===0){
            document.querySelector("#btnshort").style.display="block";
            document.querySelector("#btnload").style.display="none";
            return 1;
        }
        document.querySelector("#btnshort").style.display="none";
        document.querySelector("#btnload").style.display="block";
    }
    shorting(e){
        e.preventDefault();
        this.loading(1)
        var rslt=0;
        //le cas de success
        if(rslt===1){
            var zone =document.querySelector("#zoneshorting");
            zone.innerHTML=""
            var ele = document.createElement('button')
            ele.className="btnaftershorting"
            ele.onclick=()=>{
                var copyText = document.getElementById("lienfinal");
                if(copyText.value.length===0){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'please retry!',
                    })
                    return 0;
                }
                copyText.select();
                copyText.setSelectionRange(0, 99999);
                document.execCommand("copy");
                Swal.fire({
                    icon: 'success',
                    title: 'Copy Link...',
                    text: 'Link is Copied with success!',
                })
            }
            ele.innerHTML="Copy Link";
            zone.append(ele);
            ele = document.createElement('button')
            ele.className="btnaftershorting"
            ele.onclick=()=>{
                alert("code QR")
            }
            ele.innerHTML="Code QR";
            zone.append(ele);
            ele = document.createElement('button')
            ele.className="btnaftershorting"
            ele.onclick=()=>{
                document.location.reload();
            }
            ele.innerHTML="Retry";
            zone.append(ele);
        }else{
            setTimeout(() => {
                this.loading(0);
            }, 4000);
        }
        
    }
    refresh(){
        document.location.reload();
    }
    componentDidMount(){

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
                        <input className="input updateinput site" disabled type="text" placeholder="https://shortTriq.rf.gd/"/>
                        <input className="input updateinput" required pattern="[^' ',^'?',^'/',^'\\',]+" title="Error: delete space or '?'" type="text" placeholder="Customize Your Link"/>
                        <br></br>
                        <button className="shortenbtn" type="submit">
                            <span id="btnshort" >Shorten</span>
                            <i id="btnload" className="fa fa-spinner"></i>
                        </button>
                    </div>
                    <p className="psousbtn"><i className="fa fa-info"></i> By using our service you accept the Terms and Privacy.</p>
                </form>
                <div className="footer">
                    <p className="powerd">Powered By: <span className="auteur">Oujari Hicham</span></p>
                    <p className="allright">All right reserved <span class="c"> C </span>{(new Date()).getFullYear()}</p>
                </div>
            </Fragment>
        )
    }
}

export default Acceuil