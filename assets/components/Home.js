import React, { Component } from "react";
import axios from 'axios';
import PortalExample from "./PortalExample";

//REACT TABLEAU HOME + SHOW

function UserRow({ user }) {

    const deleteUser = () => {
        axios.delete(`user/${user.id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
        window.location.reload(false);
    }

    const showUser = () => {
        axios.get(`user/${user.id}`).then(response => {
            console.log(response);
        })
            .catch(error => {
                console.error(error);
            });
        window.location.href = "/user/" + user.id;
    }

    return <tr>
        <td>{user.id}</td>
        <td className="userName" onClick={showUser}>{user.lastName}</td>
        <td className="userName" onClick={showUser}>{user.firstName}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td>{user.phone}</td>
        <td><button className="btn btn-info" onClick={showUser}>Voir</button></td>
        <td><button className="btn btn-danger" onClick={deleteUser}>Supprimer</button></td>
    </tr >;
};


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
        this.handleClick = this.handleClick.bind(this);
        this.form = React.createRef();
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('https://localhost:8000/users').then(users => {
            this.setState({ users: users.data, loading: false })
        })
    }

    handleClick() {
        const lastName = this.form.current.elements.lastName.value;
        const firstName = this.form.current.elements.firstName.value;
        const birthDate = this.form.current.elements.birthDate.value;
        const email = this.form.current.elements.email.value;
        const address = this.form.current.elements.address.value;
        const phone = this.form.current.elements.phone.value;
        const user = {
            lastName: lastName,
            firstName: firstName,
            email: email,
            address: address,
            phone: phone
        };

        const userJson = JSON.stringify(user)

        console.log(user)

        axios.post('/user/new', { userJson: userJson, birthDate: birthDate }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    }


    render() {
        const users = this.state.users
        const rows = []

        users.forEach(user => {
            rows.push(<UserRow key={user.id} user={user} />)
        })

        return (
            <div className="container">
                <h1>Exercice Gaea21</h1>
                <h3>Liste des utilisateurs</h3>

                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">
                                #
                            </th>
                            <th scope="col">
                                Nom
                            </th>
                            <th scope="col">
                                Prénom
                            </th>
                            <th scope="col">
                                Âge
                            </th>
                            <th scope="col">
                                Email
                            </th>
                            <th scope="col">
                                Adresse
                            </th>
                            <th scope="col">
                                Téléphone
                            </th>
                            <th scope="col">
                            </th>
                            <th scope="col">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <PortalExample
                    handleClick={this.handleClick}
                    ref={this.form}
                />
            </div>
        )
    }
}

export default Home;