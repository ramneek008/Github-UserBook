import React, {useState, useContext} from 'react';
import Axios from 'axios';

import {Row, Container, Col, Input, Button, InputGroup, InputGroupAddon} from 'reactstrap';

import UserCard from '../components/UserCard';
import Repos from '../components/Repos';

import {Redirect} from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import {toast} from 'react-toastify';

const Home = () => {
    const context = useContext(UserContext);

    const [query, setQuery] = useState('');
    const [user, setUser] = useState(null);

    return(
        <Container>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                        <Input 
                            type="text"
                            value={query}
                            placeholder="Provide username here"
                            onChange={e => setQuery(e.target.value)} 
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary">Fetch User</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default Home;