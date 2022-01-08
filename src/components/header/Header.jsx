import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <div className="fixed-top">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/shumit_logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top mr-2"
                            />
                            SHUMIT
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/signin">Sign out</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="text-light" style={{ height: 60 }}>a</div>
        </>
    )
}

export default Header;