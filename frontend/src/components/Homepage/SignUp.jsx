import React, { useState, useEffect } from 'react';

function SignUp() {
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div>
            <button type="button">M'inscrire</button>
            <form>
                <div>
                    <input onChange={handleChange} type="text" name="firstname" id="firstname" placeholder='Prénom' />
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="lastname" id="lastname" placeholder='Nom de famille' />
                </div>
                <div>
                    <input onChange={handleChange} type="number" name="age" id="age" placeholder='Âge' />
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="city" id="city" placeholder='Ville' />
                </div>
                <div>
                    <input onChange={handleChange} type="text" name="country" id="country" placeholder='Pays' />
                </div>
                <div>
                    <input onChange={handleChange} type="email" name="email" id="email" placeholder='Mail' />
                </div>
                <div>
                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="Mot de passe" />
                </div>
                <div>
                    <input onChange={handleChange} type="password" name="confirm_assword" id="confirm_password" placeholder="Confirmez votre mot de passe" />
                </div>
                <button type="submit">Let's Go</button>
            </form>
        </div>
    )
};

export default SignUp;