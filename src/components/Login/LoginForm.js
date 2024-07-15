// src/components/LoginForm.js
import React, { useState } from "react";
import { Form, Button, Card } from 'react-bootstrap';

function LoginForm({ onSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    return (
        <Card style={{ width: '30rem', padding: '3rem', backgroundColor: '' }}>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: 'bold' }}>Correo o Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Card.Text style={{ paddingBottom: '1rem' }}>
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
    );
}

export default LoginForm;
