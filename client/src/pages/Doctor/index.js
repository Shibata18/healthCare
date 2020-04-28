import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modal';
import DataTable from './Table';
import { CSVLink } from "react-csv";
import Navbar from '../Navbar/index';
import api from '../../services/api';
class App extends Component {
    state = {
        items: []
    }

    async getItems() {
        await api.get('/doctors')
            .then(response => response.data)
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))
    }

    addItemToState = (item) => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    updateState = (item) => {
        const itemIndex = this.state.items.findIndex(data => data.id === item.id)
        const newArray = [
            // destructure all items from beginning to the indexed item
            ...this.state.items.slice(0, itemIndex),
            // add the updated item to the array
            item,
            // add the rest of the items to the array from the index after the replaced item
            ...this.state.items.slice(itemIndex + 1)
        ]
        this.setState({ items: newArray })
    }

    deleteItemFromState = (id) => {
        const updatedItems = this.state.items.filter(item => item.id !== id)
        this.setState({ items: updatedItems })
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        return (
            <>
                <Navbar />
                <Container className="App">
                    <Row>
                        <Col>
                            <h1 style={{ margin: "20px 0" }}>CRUD Médico</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DataTable items={this.state.items} updateState={this.updateState} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CSVLink
                                filename={"db_Doctor.csv"}
                                color="primary"
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-primary"
                                data={this.state.items}>
                                Download CSV
            </CSVLink>
                            <ModalForm buttonLabel="Adicionar Médico" addItemToState={this.addItemToState} />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default App