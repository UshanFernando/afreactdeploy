import React, { Component } from 'react'



class Login extends Component {

	constructor(props){
		super(props);

		this.addlogin = this.addlogin.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state={
			email:"",
			password:""
		};
		
	}

	onChange(event) {
        const target = event.target;
        const value =  target.value
		const name= target.name;
	
       
        this.setState({
            [name]:value
        
        });
	  }
	  

	  async addlogin(event) {

		event.preventDefault();
		if (this.state.email.trim() != 0) {
		  try {
			const requestOptions = {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify({ 
				utype:this.state.utype,
				  email: this.state.email,
				  password: this.state.password
				}),
			};
			 await fetch(
			  "http://localhost:5000/",
			  requestOptions
			);
			// this.loadCategories();
			this.setState({
				email: "",
				password: "",
			});
		  } catch (e) {
			console.log(e);
		  }
		}
	  }

	// setemail(event){
	// 	this.setState({
	// 		email:event.target.value
	// 	});
	// }

	// setpassword(event){
	// 	this.setState({
	// 		password:event.target.value
	// 	});
	// }

	

render(){

    return(
        <div>
        
	
	<section class="login_box_area section-margin">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="login_box_img">
						<div class="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a class="button button-account" href="Register">Create an Account</a>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="login_form_inner">
						<h3>Log in to enter</h3>
						<form class="row login_form"  id="contactForm" onSubmit={this.addlogin}>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="email" 
								placeholder="Email" onfocus="this.placeholder = ''" 
								onblur="this.placeholder = 'Username'"
								value={this.state.email}
                				onChange={this.onChange}/>
							</div>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" name="password" 
								placeholder="Password" onfocus="this.placeholder = ''" 
								onblur="this.placeholder = 'Password'"
								value={this.state.password}
                				onChange={this.onChange}/>
							
                            </div>
							{/* <div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector"/>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div> */}
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="button button-login w-100">Log In</button>
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
    )
}
}
export default Login;