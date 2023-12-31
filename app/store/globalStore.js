import axios from "axios";
import Swal from "sweetalert2";

const { proxy } = require("valtio");

export const globalState = proxy({
    baseurl : "http://localhost:8080/api",
    activeTab: 0,
    isAuthenticate : false
})

export const globalAction = {
    async login(username, password){
        axios
        .post(globalState.baseurl + '/authenticate',{
            username : username,
            password : password
        }).then((response) => {
         globalState.isAuthenticate = true;

        }).catch((err)=>{
            globalState.isAuthenticate = false;
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    },  
    async createUser(username, password, name){
        axios
        .post(globalState.baseurl + '/createuser',{
            username : username,
            password : password,
            name :name

        }).then((response) => {
            Swal.fire({
                icon: 'success',
                title: response.data.message,
              });

        }).catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
          });
        });
    }
}