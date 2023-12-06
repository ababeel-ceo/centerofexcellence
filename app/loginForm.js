export default function LoginForm(){
    return(
        <div class="login-container">
        <div class="wrapper">
            <h3>Login Form</h3>
            <div class="form-container">
              <input class="form-control txt" type="text"  placeholder="Username"/>
              <input class="form-control txt" type="password" placeholder="Password"/>
              <button class="form-control btn">Login</button>
            </div>
        </div>
      </div>
    )
}