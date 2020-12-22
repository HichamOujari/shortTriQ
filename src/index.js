import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios.get("http://localhost:4000/")
    .then(res=>{
        console.log("------+++++++++++++++++++++++++------------")
        console.log(res)
    })
    .catch(err=>{
        console.log("--------------------------")
        console.log(err)
    })
ReactDOM.render(<App />,document.getElementById('root'));