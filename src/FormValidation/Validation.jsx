import React, { useRef, useState } from 'react';

function Validation() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const termsRef = useRef();
    const roleRef = useRef();
    const [errors, setErrors] = useState([]);
    const [isDisable, setIsDisable] = useState(false);
    let isValid = true;

    const validation = () => {
        setErrors([]); // Clear previous errors
        isValid = true;

        const nameValue = nameRef.current.value.trim();
        const emailValue = emailRef.current.value.trim();
        const passwordValue = passwordRef.current.value.trim();
        const termsChecked = termsRef.current.checked;
        const roleValue = roleRef.current.value.trim();

        if (nameValue === '') {
            setErrors((prevErrors) => [...prevErrors, 'Name is required.']);
            isValid = false;
        }
        if (emailValue === '') {
            setErrors((prevErrors) => [...prevErrors, 'Email is required.']);
            isValid = false;
        }
        if (passwordValue === '') {
            setErrors((prevErrors) => [...prevErrors, 'Password is required.']);
            isValid = false;
        }
        if (!termsChecked) {
            setErrors((prevErrors) => [...prevErrors, 'You must agree to the terms.']);
            isValid = false;
        }
        if (roleValue === '') {
            setErrors((prevErrors) => [...prevErrors, 'Role is required.']);
            isValid = false;
        }

        return isValid;
    };

    const resetForm = () => {
        if (nameRef.current) nameRef.current.value = '';
        if (emailRef.current) emailRef.current.value = '';
        if (passwordRef.current) passwordRef.current.value = '';
        if (termsRef.current) termsRef.current.checked = false;
        if (roleRef.current) roleRef.current.value = '';
        setErrors([]);
        setIsDisable(false); // Re-enable the button after form reset
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsDisable(true); // Disable the button during submission

        if (validation()) {
            console.log('Form submitted successfully!');
            resetForm();
        } else {
            setIsDisable(false); // Re-enable the button if validation fails
        }
    };

    return (
        <div className="container mt-4">
            {errors.length > 0 && (
                <div className="alert alert-danger" role="alert">
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <h2>Form with useRef</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" ref={nameRef} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="email" ref={emailRef} />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" ref={passwordRef} />
                </div>

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

                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select id="role" className="form-select form-control" ref={roleRef}>
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isDisable} // Disable button if `isDisable` is true
                >
                    {isDisable ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default Validation;
