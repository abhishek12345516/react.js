function Form (){
    return(
        <div className="container mt-5">
            <h1>Login Form</h1>
        <div className="row g-3 align-items-center w-25">
            <div className="col-auto">
    <label className="row-form-label">UserName</label>
  </div>
  <div className="row-auto">
    <input type="Username" id="inputName" className="form-control" />
  </div>
  <div className="col-auto">
    <label className="col-form-label">Password</label>
  </div>
  <div className="row-auto">
    <input type="password" id="inputPassword6" className="form-control" />
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
  <div className="col-auto "> 
  <button type="Submit" className="btn btn-primary">submit</button>
  </div>
</div>
</div>
    )
}

export default Form;