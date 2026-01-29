import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Picture from "./Picture.png";

function App(): React.JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "1px solid red", padding: "4px" }}
        >
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>My App</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            Hello World Steven Harrington
            <Container>
                <Row>
                    <Col>
                        <ol>
                            <li>calculator</li>
                            <li>notebook</li>
                            <li>pencil</li>
                        </ol>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "10vh",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img src={Picture} alt="a picture" />
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "10vh",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100%",
                                height: "10vh",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
