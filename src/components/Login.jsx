import axios from 'axios';
import React from 'react';

function Login(){

  const [details, setDetails] = React.useState({
    sid: "",
    password: ""
  })

  function handleSubmit(data){
    axios.post('http://localhost:5000/login', data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setDetails(function (prev) {
      const newVal = {
        ...prev,
        [name]: value
      };
      return newVal;
   });
  }

  return (
    <div>
      <form>
        <label for="fn">SID:</label>
        <input type="text" name="sid" value={details.sid} onChange={handleChange}/>
        <label for="password">Password</label>
        <input type="password" name="password" value={details.password} onChange={handleChange}/>
        <button onClick={() => {
          handleSubmit(details);
          setDetails({
            sid: "",
            password: ""
          });
          return;
        }
        }>Submit</button>
      </form>
    </div>
  );
}

export default Login;