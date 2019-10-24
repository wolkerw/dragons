import React, { PureComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.scss";
// import logoRenner from "../../assets/images/logos/logo-lojas-renner.svg";

class Header extends PureComponent {
    render() {
        return (
            <Container fluid className="header">
                <div className="grid">
                    <Row>
                        <Col>
                            <p>Dragões</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export default Header;
