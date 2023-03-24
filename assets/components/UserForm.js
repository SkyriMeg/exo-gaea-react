// import React from "react";

// VIA GRAFIKART

// const Field = React.forwardRef(function (props, ref) {
//     return <div className="form-group">
//         <label htmlFor="lastName">Nom</label>
//         <input name="lastName" type="text" className="form-control" ref={ref} />
//     </div>
// })

// class UserForm extends React.Component {

//     constructor(props) {
//         super(props)
//         this.handleClick = this.handleClick.bind(this)
//         this.input = React.createRef()
//     }

//     handleClick(e) {
//         console.log(this.input.current.value)
//     }

//     render() {
//         console.log(this.input)
//         return <div>
//             <Field ref={this.input} />
//             <button onClick={this.handleClick}>Ajouter</button>
//         </div>
//     }
// }

// export default UserForm;


// VIA DOC REACT

// import { useRef } from 'react';

// export default function Form() {
//     const inputRef = useRef(null);

//     function handleClick() {
//         inputRef.current.focus();
//     }

//     return (
//         <>
//             <input ref={inputRef} />
//             <button onClick={handleClick}>
//                 Focus the input
//             </button>
//         </>
//     );
// }

// import React, { useState } from "react";
// import { useRef } from 'react';

// const addUser = () => {
//     axios.delete(`user/${user.id}`)
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     window.location.reload(false);
// }

// const UserForm = () => {
//     const [lastName, setLastName] = useState('');
//     const [firstName, setFirstName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(firstName, lastName)
//     }

//     return (
//         <div className="create">
//             <h2>Ajouter un utilisateur</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Nom </label>
//                 <input
//                     type="text"
//                     required
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <label>Prénom </label>
//                 <input
//                     type="text"
//                     required
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <button>Ajouter</button>
//             </form>
//         </div>
//     )
// }

import React from "react";

const UserForm = () => {
    const [uppercase, setUppercase] = React.useState(false)
    const inputField = React.useRef(null)

    const toggleInputCase = () => {
        // Accessing the ref using inputField.current
        const value = inputField.current.value;
        inputField.current.value = uppercase ? value.toLowerCase() : value.toUpperCase();
        setUppercase(previousValue => !previousValue)
    }

    return (
        <div>
            {/* Referencing the ref from this.inputField */}
            <input type="text" ref={inputField} />
            <button type="button" onClick={toggleInputCase}>
                Toggle Case
            </button>
        </div>
    )
};

export default UserForm;
