import React from 'react';
import axios from 'axios';
// import {request} from "./hooks/http.hook.js";
function App() {
  const [data,setData] = React.useState(null)
  const loginRegister = "boulderTest"
  const passwordRegister = "akshjdgtaskhjgdajhskgdjhagsd"
  const nicknameRegister = "boulder"
  async function register() {
    await axios.post("http://localhost:8000/api/auth/register", {
      loginRegister,
      passwordRegister,
      nicknameRegister
    })
    .then((res)=>{
      setData(res.data);
      console.log(res.data)})
    .catch((err)=>
    {
      console.log(err);
    })
  }
  return(
      <h1>app</h1>
  )
}
export default App
