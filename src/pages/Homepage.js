import React from "react";
import { Form, Container, Table, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const formikSubmit = () => {
  console.log("submitted");
}

const Homepage = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: "",
      phone: "",
      gender: "",
    },
    validationSchema: basicSchema,
    formikSubmit
  });

  console.log(errors)

	return (
		<>
			<Container>
				<Row className="h-100">
					<Col
						md={6}
						s={4}
						className="d-flex flex-column align-items-center gap-3 mt-5"
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
							<Form.Text className="text-muted bg-black p-2 rounded mb-2">
								We'll never share your name with anyone else.*
							</Form.Text>
							<Form.Group className="mb-3" controlId="formName">
								<Form.Control
									onChange={handleChange}
                  onBlur={handleBlur}
									value={values.userName}
									name="userName"
									type="text"
									placeholder="Enter Username"
                  className=""
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="formPhoneNumber"
							>
								{/* <Form.Label>Phone Number</Form.Label> */}
								<Form.Control
									onChange={handleChange}
									onBlur={handleBlur}
                  value={values.phone}
									name="phone"
									type="text"
									placeholder="Enter Phone Number"
								/>
							</Form.Group>

							<Form.Group
								value={values.gender}
                type="text"
								name="gender"
								onChange={handleChange}
                onBlur={handleBlur}
							>
								<Form.Select name="gender" defaultValue={"Gender"}>
									<option disabled>Gender</option>
									<option>Male</option>
									<option>Female</option>
									<option>Other</option>
								</Form.Select>
							</Form.Group>

							<Button
								className="bg-black border-dark w-25 mx-auto mt-2"
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
						className="d-flex flex-column align-items-center mt-5 align-self-center"
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
