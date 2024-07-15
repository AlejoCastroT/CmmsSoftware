import React, { useState } from "react";
import './Login.css'; // Asegúrate de importar tu archivo CSS si lo necesitas
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Importar Axios

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post('https://cmms-backend-g8ek.onrender.com/users/login', {
            username,
            password
        })
        .then(response => {
            console.log('Respuesta del servidor:', response.data);
            setResponseData(response.data); // Guarda la respuesta del servidor en el estado
            setError(null); // Reinicia el estado de error si la solicitud es exitosa
        })
        .catch(error => {
            console.error('Error al hacer la solicitud:', error);
            setError(error.message); // Guarda el mensaje de error en el estado
            setResponseData(null); // Reinicia los datos de respuesta en caso de error
        });
    };

    return (
        <Container fluid className="d-flex vh-100" style={{ backgroundColor: '#070F2B' }}>
            <Row className="m-auto">
                <Col className="px-0">
                    <Card style={{ width: '30rem', padding: '3rem', backgroundColor: '#1B1A55', paddingBottom: '113px', marginBottom: '-113px' }}>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '3.1rem', lineHeight: '4.2rem', textAlign: 'center', color: 'white' }}> Tu<span style={{ color: '#ffdd57' }}> aliado</span> en el <br /> <span style={{ color: '#ffdd57' }}>mantenimiento</span> eficiente</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="px-0">
                    <Card style={{ width: '30rem', padding: '3rem', backgroundColor:''}}>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{ fontWeight: 'bold'}}>Correo o Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter email"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <Card.Text style={{ paddingBottom: '1rem'}}>
                                        Nunca compartiremos tu email con alguien más.
                                    </Card.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Recordarme" style={{ paddingTop: '1rem' }} />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-3 custom-button">
                                    Ingresar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {responseData && (
                <div className="mt-3 text-white">
                    <p>Respuesta del servidor:</p>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="mt-3 text-danger">
                    <p>Error: {error}</p>
                </div>
            )}
        </Container>
    );
}

export default Login;
