import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Link to="/">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Link to={"/contact-us"}>
                            <p style={{
                                color: 'white',
                            }}>Contact US</p>
                        </Link>
                        <Link to={"movies"}>
                            <p style={{
                                color: 'white',
                            }}>Movies</p>
                        </Link>
                        <Link to={"counter"}>
                            <p style={{
                                color: 'white',
                            }}>Counter</p>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;