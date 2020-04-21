import React, { Component } from 'react';
import qs from 'querystring';

import api from '../../services/api';

import UserTable from './Tables/UserTable';
import AddUserForm from './Forms/AddUserForm';
import EditUserForm from './Forms/EditUserForm';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      currentUser: { cpf_paciente: '', name_paciente: '', email: '', senha: '', telefone_paciente: "" },
      editing: false
    }
  }

  componentDidMount() {
    this.refreshUserTable();
  }

  refreshUserTable() {
    this.usersData = api.get('pacientes')
      .then(response => response.data)
      .then(data => {

        this.setState({
          users: data.data,
          setUsers: data.data
        });
      });
  }

  addUser = user => {

    api.post('pacientes', qs.stringify(user))
      .then(res => {
        this.refreshUserTable();
      });
  };

  deleteUser = id => {

    api.delete(`pacientes/${id}`)
      .then(res => {
        this.refreshUserTable();
      });
  };

  updateUser = (id, user) => {

    api.put(`pacientes/${id}`, qs.stringify(user))
      .then(res => {

        this.refreshUserTable();
      });

    this.setState({
      currentUser: { cpf_paciente: '', name_paciente: '', email: '', senha: '', telefone_paciente: "" }
    });

    this.setEditing(false);
  };

  editRow = user => {

    this.setState({
      currentUser: { cpf_paciente: user.cpf_paciente, name_paciente: user.name_paciente, email: user.email, senha: user.senha, telefone_paciente: user.telefone_paciente }
    });

    this.setEditing(true);
  };

  setEditing = isEditing => {

    this.setState({ editing: isEditing });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="container">

        <div className="row">

          {
            this.state.editing ? (
              <div className="col s12 l6">
                <h4>Edit User</h4>
                <EditUserForm
                  editing={this.state.editing}
                  setEditing={this.setEditing}
                  currentUser={this.state.currentUser}
                  updateUser={this.updateUser}
                />
              </div>
            ) : (
                <div className="col s12 l6">
                  <h4>Add user</h4>
                  <AddUserForm addUser={this.addUser} />
                </div>
              )
          }

          <div className="col s12 l6">
            <h5>Users</h5>
            <UserTable users={users} editRow={this.editRow} deleteUser={this.deleteUser} />
          </div>
        </div>
      </div>
    );
  };
};

export default Home;