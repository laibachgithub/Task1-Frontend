import react, { useState } from "react"
import Alert from "./Alert";

function NewUser() {

    const [user, setUser] = useState({
        uName: "",
        uEmail: "",
        uCell: 0,
        uAge: 0
    })
    //vaildation

    const [errors, setError] = React.useState({});
    const validateForm = () => {
        const errors = {};
    
        if (value.uName.length === 0) {
          errors.uName = "Name is rquired!";
        } else if (value.name.length <= 10) {
          errors.uName = "Name must be more that 10 characters!";
        }
     
        if (value.uEmail.length === 0) {
          errors.uEmail = "Email is rquired!";
        } else if (
          !value.uEmail.match(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
          )
        ) {
          errors.uEmail = "This is not a valid email!";
        }
    
    const handleChange = (e) => {
    
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

//submit data
    const handleSubmit = (e) => {
e.preventDefault()
  let errorsObj = validateForm();
    setError(errorsObj);
    if (Object.keys(errorsObj).length === 0) {
      setSuccess(true);
    }
        console.log("user", user)
        const {data} = axious.post("/users/addusers");
        setUser(data);
        console.log(data);

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
            {success && (
            <Alert
              type="success"
              message="The form is successfully submited!"
            />
          )}
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="uName" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="uEmail" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Cell Number</label>
                    <input type="number" class="form-control" onChange={handleChange} name="uCell" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cell no." />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="number" class="form-control" onChange={handleChange} name="uAge" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter age" />
                </div>

                <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
}
export default NewUser;