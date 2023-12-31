import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Image,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { DATAPETS } from "../models/dataProfile";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  lastname: string;
  age: string;
  pathimage: string;
  position: string;
  gender: string;
}

const HomeWorkTwo: React.FC = () => {
  const navigate = useNavigate();

  const viewClick = (profile: Props) => {
    navigate("/profile", { state: profile });
  };

  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Card className="mt-5">
            <Card.Header as="h3">HomeWork By PlaToo</Card.Header>
            <Card.Body className="p-4">
              <Card.Title className="mb-3">HomeWork No. 1</Card.Title>
              <Table responsive="md">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Image</th>
                    <th>Position</th>
                    <th>Gender</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {DATAPETS.map((data) => (
                    <tr key={data.id}>
                      <td className="text__table">{data.id}</td>
                      <td className="text__table">{data.name}</td>
                      <td className="text__table">{data.lastname}</td>
                      <td className="text__table">{data.age}</td>
                      <td className="text__table">
                        <Image
                          src={data.pathimage}
                          alt={data.name}
                          roundedCircle
                          className="image__profile"
                        />
                      </td>
                      <td className="text__table">{data.position}</td>
                      <td className="text__table">{data.gender}</td>
                      <td>
                        <Button
                          variant="outline-info"
                          onClick={() => viewClick(data)}
                        >
                          <FontAwesomeIcon icon={faEye} /> View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeWorkTwo;
