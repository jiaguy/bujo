import React from 'react';
import logo from '../logo.svg';

// import bootstrap components here
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const home = () => {
    return (
        <div className="App">
            <h1>Home</h1>
            <p>Home page body content</p>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/components/Home.js</code> and save to reload.
                </p>
                <p>Elenka is the best</p>
                <Button variant="light">Light</Button>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Lawn Mowing</Card.Title>
                    <Card.Text>
                    Mow your neighbour's lawn once every 2 weeks at a
                    rate of $20 per session.
                    </Card.Text>
                    <Button variant="primary">Next Choice</Button>
                </Card.Body>
                </Card>
            </header>
        </div>
    );
}
 
export default home;