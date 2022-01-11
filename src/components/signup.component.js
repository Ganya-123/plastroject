import React from "react";

export default class Register extends React.Component{

    constructor(){
        super()
         this.state = {
            regmsg : '',
            loginmsg : ''
        }
    }
    register = (event)=>{
        var ob = {
            id : this.id.value,
            name : this.name.value,
            email:this.email.value,
            phone : this.phone.value,
            password: this.password.value,
        }
        fetch(`http://localhost:8080/auth/register`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(ob)
        }).then(response=>response.json()).then(data=>{
            console.log(data)
            this.setState({regmsg:data.data})
            
        });;
        console.log(ob)
        event.preventDefault()
    }

    render(){
        return(
            
                            
            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <h3  class="register-heading">Register </h3>
            <form method="post" onSubmit={this.register} action="">
            <div class="row register-form">
                
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" class="form-control"  ref={c=>this.id=c}  required />
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control"  ref={c=>this.phone=c} required />
                    </div>
                    <div class="form-group">
                        <input ref={c=>this.password=c} type="password" class="form-control" placeholder="Password *" id="password" name="password"  required/>
                    </div>
                    

                </div>
            
                <div class="col-md-6">
                    <div class="form-group">
                    <input type="text" class="form-control"  ref={c=>this.name=c}  />
                    </div>
                    
                    <div class="form-group">
                        <input type="email" ref={c=>this.email=c}    />
                    </div>
                    
                    <input type="submit" class="btnRegister" name="patsub1"  value="Register"/>
                </div>
                <b style={{color:"red"}}>{this.state.regmsg}</b>
            </div>
        </form>
        </div>

        )
    }

}