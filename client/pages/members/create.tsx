import { NextPage } from "next";
import Link from "next/link";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";

const Members: NextPage = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Endereco</Form.Label>
                    <Form.Control type="text" placeholder="Endereco" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="text" placeholder="Endereco" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Situacao</Form.Label>
                    <Form.Check type="radio" label="Reconciliacao" />
                    <Form.Check type="radio" label="Aceitando" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contato</Form.Label>
                    <Form.Control type="text" placeholder="Contato" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Select>
                        <option>Seleciona a Lideranca</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="primary" type="submit">
                            Cadastrar
                        </Button>
                        <Link href="/members">
                            <Button variant="secondary" type="button">
                                Cancelar
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </Container>)
}

export default Members;