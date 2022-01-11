import React from "react";

export default class Login extends React.Component{

    constructor(){
        super()
        this.state = {
          regmsg : '',
          loginmsg : '',
          loginstatus : ''
        }
    }
    login = (event)=>{
        var ob = {
            email : this.email.value,
            password: this.password.value
        }
        console.log(this.setState.loginstatus)
        fetch(`http://localhost:8080/auth/login`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({regmsg:data.data})
            if(data.msg===200){
            this.setState({loginstatus:true})
            }
            
        });;
        console.log(this.state.loginstatus)
        console.log(ob)
        event.preventDefault()
    }

    render(){
        
        return(
            <div class="tab-pane fade show" id="admin" role="tabpanel" aria-labelledby="profile-tab">
            <h3  class="register-heading"> Login</h3>
            <form method="post"  onSubmit={this.login} action="">
            <div class="row register-form">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="email" class="form-control" ref={c=>this.email=c} required/>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input ref={c=>this.password=c} type="password" class="form-control" placeholder="Password *" id="password" name="password"  required/>
                    </div>
                    
                    <input type="submit" class="btnRegister" name="adsub" value="Login"/>
                </div>
                <b style={{color:"red"}}>{this.state.regmsg}</b>
            </div>
        </form>
        </div>
        )
    }

}