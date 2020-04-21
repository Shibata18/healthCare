import React, { useState, useEffect } from 'react';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    };
    //cpf_paciente: '', name_paciente: '', email: '',senha:'',telefone_paciente:"" 
    const submitForm = event => {
        event.preventDefault();

        props.updateUser(user.id, user);
    };

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text" 
                            id={user.cpf_paciente} 
                            name="name"
                            value={user.name_paciente}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="name"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="email" 
                            name="email" 
                            value={user.email}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="email"></label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="password" 
                            name="senha" 
                            value={user.senha}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="senha"></label>
                    </div>
                </div>
                   <div className="row">
                    <div className="input-field col s12">

                        <input 
                            type="text" 
                            name="telefone_paciente" 
                            value={user.telefone_paciente}
                            onChange={handleInputChange} 
                            required />
                        <label htmlFor="telefone_paciente"></label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12 m6">

                        <button className="waves-effect waves-light btn">Update</button>
                    </div>

                    <div className="input-field col s12 m6">

                        <button 
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                            >Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;