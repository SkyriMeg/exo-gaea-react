import React, { Component } from "react";
import axios from 'axios';

//REACT MODALE



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
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td>{user.phone}</td>
        <td><button className="btn btn-info" onClick={showUser}>Voir</button></td>
        <td><button className="btn btn-danger" onClick={deleteUser}>Supprimer</button></td>
    </tr >;
};

class Home extends Component {
    constructor() {
        super();
        this.state = { users: [], loading: true };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('https://localhost:8000/users').then(users => {
            this.setState({ users: users.data, loading: false })
        })
    }

    render() {
        const loading = this.state.loading
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
            </div>
        )
    }
}

export default Home;