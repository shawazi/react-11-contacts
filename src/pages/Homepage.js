import React, { useState } from "react";
import { Form, Container, Table, Button, Row, Col } from "react-bootstrap";

const Homepage = () => {
	const [userName, setUserName] = useState("");
	const [phone, setPhone] = useState("");



	const handleSubmit = (e) => {
    e.preventDefault()
		console.log(userName, phone);
	};

	return (
		<>
			<Container className="d-flex mt-5 justify-content-between">
				<Row>
					<Col
						md={6}
						s={4}
						className="d-flex flex-column align-items-center justify-content-center gap-3 mt-5"
					>
						<div className="hero-image"></div>
						<h1
							className="p-1 rounded bg-black"
							style={{ fontSize: "24px" }}
						>
							&lt;
							<span>Wazman94's app=&#123;CONTACT_APP&#125;</span>
							/&gt;
						</h1>
						<h2 className="p-1 rounded bg-black">Add Contact</h2>
						<Form
							onSubmit={handleSubmit}
							className="d-flex flex-column justify-content-center"
						>
							<Form.Group
								className="mb-3"
								controlId="formName"
							>
								<Form.Label>Name</Form.Label>x``
								<Form.Control
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
									type="text"
									placeholder="Enter Name"
								/>
							</Form.Group>
							<Form.Text className="text-muted bg-black p-2 rounded">
								We'll never share your name with anyone else.*
							</Form.Text>

							<Form.Group
								className="mb-3"
								controlId="formPhoneNumber"
							>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
                  onChange={(e) => setPhone(e.target.value)}
									value={phone}
                  type="text"
									placeholder="Phone Number"
								/>
							</Form.Group>

							<Button
								className="bg-black border-dark w-25 mx-auto"
								variant="primary"
								type="submit"
							>
								Submit
							</Button>
							<Form.Text style={{ fontSize: "5px" }}>
								*Unless it appears to be profitable for us to do
								so!
							</Form.Text>
						</Form>
					</Col>
					<Col
						md={6}
						s={4}
						className="d-flex flex-column align-items-center mt-5"
					>
						<h2 className="bg-black p-1 rounded">
							&lt;Contact List /&gt;
						</h2>
						<Table striped bordered hover variant="dark">
							<thead>
								<tr>
									<th>#</th>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Username</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Larry the Bird</td>
									<td>Not a Bird</td>
									<td>@twitter</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Homepage;