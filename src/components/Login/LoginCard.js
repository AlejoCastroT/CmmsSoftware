// src/components/LoginCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

function LoginCard() {
    return (
        <Card style={{ width: '30rem', padding: '3rem', backgroundColor: '#1B1A55', paddingBottom: '113px', marginBottom: '-113px' }}>
            <Card.Body>
                <Card.Title style={{ fontSize: '3.1rem', lineHeight: '4.2rem', textAlign: 'center', color: 'white' }}>
                    Tu<span style={{ color: '#ffdd57' }}> aliado</span> en el <br /> <span style={{ color: '#ffdd57' }}>mantenimiento</span> eficiente
                </Card.Title>
            </Card.Body>
        </Card>
    );
}

export default LoginCard;
