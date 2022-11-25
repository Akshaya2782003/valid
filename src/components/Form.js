import './Form.css';
import React from "react";
class Form extends React.Component 
{
  constructor() 
  {
    super();
    this.state = {   
      fields: {},   
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);   
    this.submitRegistrationForm = this.submitRegistrationForm.bind(this);
  };

  handleChange(e) 
  {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }
  }

  validateForm() 
  {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) 
    {
      formIsValid = false;
      errors["username"] = "*Enter Username";
    }

    if (typeof fields["username"] !== "undefined") 
    {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) 
      {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) 
    {
      formIsValid = false;
      errors["emailid"] = "*Enter Email ID";
    }

    if (typeof fields["emailid"] !== "undefined") 
    {
      var pattern = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
      if (!pattern.test(fields["emailid"])) 
      {
        formIsValid = false;
        errors["emailid"] = "*Invalid Email";
      }
    }

    if (!fields["password"]) 
    {
      formIsValid = false;
      errors["password"] = "*Enter Password";
    }

    if (typeof fields["password"] !== "undefined") 
    {
    if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Enter your Password";
      }
  
      if (typeof fields["password"] !== "undefined") {
        if (
          !(fields["password"].match(/([a-z].[A-Z])|([A-Z].[a-z])/)) ||
          !(fields["password"].match(/([!,%,&,@,#,$,^,*,?,_,~])/)) ||
          !(fields["password"].match(/([0-9])/)) 
        ) {
          formIsValid = false;
          errors["password"] = "Enter secure and strong Password";
        }
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

render() 
{
  return (
  <div className="formPage">
    <center>
    <h3 className='head'>Dynamic Form</h3>
   <div className="formBox">
      
      <br></br><br></br>

      <form method="post" name="RegistrationForm"  onSubmit= {this.submitRegistrationForm} >

      <label>Enter your username</label>
      <br></br><br></br>
      <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder="your username"/>
      
      <div className="errorMsg">{this.state.errors.username}</div>
      <br></br>

      <label>Enter your email &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br></br><br></br>
      <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  placeholder="your email"/>
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <br></br>
      
      <label>Enter your password</label>
      <br></br><br></br>
      <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="your Password" />
      <div className="errorMsg">{this.state.errors.password}</div>
      <br></br><br></br>
      <input type="submit" className="button"  value="Submit"/>
      </form>
      
  </div>
  </center>
</div>

    );
}
}

export default Form