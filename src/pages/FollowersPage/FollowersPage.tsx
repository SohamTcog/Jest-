import React from 'react'
import { Container } from "react-bootstrap"
import Followers from '../../components/Followers/Followers'
//npm install @types/react-bootstrap
export default function FollowersPage() {
    return (
        <div>
            <Container>
                <Followers />
            </Container>
        </div>
    )
}
