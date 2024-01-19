import Input from "./components/Input";
import React, { useState } from 'react';
import axios from 'axios';

function App(){


  const [form, setForm] = useState({
    name:'',
    email:'',
    password:''
  });

const handleChange = (e) => {
      setForm({...form, [e.target.name] : e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8000/api/register', form);

    
    if (response.status === 200) {
     
      console.log('Inscription réussie');
      setForm({
        name: '',
        email: '',
        password: '',
      });
    }
  } catch (error) {
    
    console.error('Échec de l\'inscription :', error);
  }
};

  return <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-5">
              <div className="card-header">
                <h5 className="card-title">Register</h5>
              </div>
              <div className="card-body">
                  <form onSubmit={handleSubmit}>
                      <Input label="Name" id="name" name="name" value={form.name}  handleChange={handleChange}/>
                      <Input label="Email" id="email" name="email" type="email" value={form.email}  handleChange={handleChange}/>
                      <Input label="Password" id="password" name="password"type="password" value={form.password} handleChange={handleChange} />


                      <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                      </div>
                  </form>
              </div>

            </div>
          </div>
        </div>
      </div>
  </>
}

export default App;