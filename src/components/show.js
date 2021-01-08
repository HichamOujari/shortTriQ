import Axios from "axios";
import React,{Component,Fragment} from "react"
import Swal from 'sweetalert2'
import logo from "../Assets/logo.png"
import loading from "../Assets/loading.gif"
import QRCode from 'qrcode.react';
var urls="https://shorttriq-server.herokuapp.com/"
var url = "https://shorttriq.herokuapp.com/"
//var urlS="http://localhost:4000/"
//var url = "http://localhost:3000/
class Show extends Component {

    state = {
        lien :""
    }
    codeQR(){
        var copyText = document.getElementById("lienfinal");
        if(copyText.value.length===0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please retry!',
            })
            return 0;
        }else{
            document.querySelector(".modal").style.display="block"
            document.querySelector(".modal").style.animation="modalQr 1s 1"
        }
    }
    copy(){
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
    refresh(){
        document.location.href=url
    }
    disapire(){
        document.querySelector(".modal").style.display="none"
    }
    componentDidMount(){
        Axios.get(urls+"check/"+this.props.match.params.path)
            .then(res=>{
                if(res.data.isExist===1){
                    document.getElementById("loading").remove();
                    this.setState({
                        lien:res.data.lien,
                    })
                    document.querySelector(".show-content").style.display="block";
                }else{
                    document.location.href=url+"error"
                }
            })
    }
    render(){
        return(
            <Fragment>
                <div className="navbar">
                    <p className="title"><i className="fa logo fa-link"></i> Short<span className="soustitle">TriQ</span></p>
                    <p className="support">support US</p>
                </div>
                <div className="modal">
                    <p className="modaltitre">The QRCode is generated successfully</p>
                    <br></br><QRCode id="modalQRCode" value={"https://shorttriq.herokuapp.com/"+this.props.match.params.path} />
                    <br/><button onClick={this.disapire} className="modalOK">OK</button>
                </div>
                <div className="content bg-none" id="loading">
                    <img className="loading-img" alt="..." src={loading} />
                </div>
                <div className="content show-content">
                    <img  src={logo} alt="..." className="souslogo" />
                    <p className="ptitle">URL Shortener</p>
                    <p className="psoustitle">Simplify your links, track  manage them</p>
                    <input id="lienfinal" value={"https://shorttriq.herokuapp.com/"+this.props.match.params.path} className="input bordered shorteninput" type="text"/>
                    <div id="zoneshorting">
                        <button className="btnaftershorting" onClick={this.copy}>Copy Link</button>
                        <button className="btnaftershorting" onClick={this.codeQR}>CodeQR</button>
                        <button className="btnaftershorting" onClick={this.refresh}>Re-Short</button>
                    </div>
                    <p className="psousbtn"><i className="fa fa-info"></i> By using our service you accept the Terms and Privacy.</p>
                </div>
                <div className="footer">
                    <p className="powerd">Powered By: <span className="auteur">Oujari Hicham</span></p>
                    <p className="allright">All right reserved <span className="c"> C </span>{(new Date()).getFullYear()}</p>
                </div>
            </Fragment>
        )
    }
}

export default Show