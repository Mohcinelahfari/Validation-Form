import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
    // Create refs for each input field
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const termsRef = useRef();
    const roleRef = useRef();
    const [errors, setErros] = useState([])
    let isfalid = true
    const ValidationForm = () => {
        const name = nameRef.current.value
        const email=emailRef.current.value
        const password=passwordRef.current.value
        const terms=termsRef.current.checked
        const role=roleRef.current.value
        if(name.trim()=== ''){
            setErros(preventDefault => {
                return [...preventDefault, 'Have Problem with Name']
            })
            isfalid = false
        }
        if(email.trim()=== ''){
            setErros(preventDefault => {
                return [...preventDefault, 'Have Probelem with Email']
            })
            isfalid = false
        }
        if(password.trim() === ''){
            setErros(preventDefault => {
                return [...preventDefault ,  'Have Problem with Password']
            })
            isfalid = false
        }
        if(terms.checked){
            setErros(preventDefault => {
                return [...preventDefault , 'Have Probelme with the Terms']
            })
            isfalid = false
        }
        if(role.trim() === ''){
            setErros(preventDefault => {
                return [...preventDefault, 'have Probelem with the Role']
            })
            isfalid = false
        }
        console.log(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setErros([])
        ValidationForm()
        


       
    };

    return (
        <div className="container mt-4">
            {errors.length > 0 ? <div class="alert alert-danger" role="alert">
                <ul>
                    {errors.map((error) => {
                        return <li>{error}</li>
                    })}
                </ul>
        </div>
 : ''}
            <h2>Form with useRef</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        ref={nameRef}
                        
                    />
                </div>

                {/* Email input */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        ref={emailRef}
                        
                    />
                </div>

                {/* Password input */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        ref={passwordRef}
                        
                    />
                </div>

                {/* Checkbox */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        ref={termsRef}
                        
                    />
                    <label className="form-check-label" htmlFor="terms">
                        I agree to the terms and conditions
                    </label>
                </div>

                {/* Select Dropdown */}
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select
                        id="role"
                        className="form-select form-control"
                        ref={roleRef}
                        
                    >
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="mt-3">
                    <h5>Form Data:</h5>
                      
                </div>
        </div>
    );
}

export default Form;
