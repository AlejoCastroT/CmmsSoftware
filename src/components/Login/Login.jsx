import React, { useState } from "react";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from './LoginForm';
import LoginCard from './LoginCard';
import { loginUser } from '../../services/authService';

function Login() {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (username, password) => {
        try {
            const response = await loginUser(username, password);
            setResponseData(response.data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setResponseData(null);
        }
    };

    return (
        <Container fluid className="d-flex vh-100" style={{ backgroundColor: '#070F2B' }}>
            <Row className="m-auto">
                <Col className="px-0">
                    <LoginCard />
                </Col>
                <Col className="px-0">
                    <LoginForm onSubmit={handleSubmit} />
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