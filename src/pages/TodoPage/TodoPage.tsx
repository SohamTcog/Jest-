import React from 'react';
import { Container } from 'react-bootstrap';
import Todo from '../../components/Todo/Todo';

export default function TodoPage() {
    return (
        <div>
            <Container>
                {/* <Header title="Todo" /> */}
                <Todo/>
            </Container>
        </div>
    );
}
