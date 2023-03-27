import React, { useState, useEffect } from "react";
import { Form, Container, Table, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
// import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Homepage = () => {
	const [data, setData] = useState([]);
	// const [flag, setFlag] = useState(true);

	// const config = {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// };

	function submitForm() {
		localStorage.setItem("contacts", JSON.stringify([...data, values]))
		setData([...data, values]);
		// const response = await axios.post(mainURL, values, config);
		// console.log(response);
		// JSON.parse(JSON.stringify(response));
		
	}

	useEffect(() => {
		const contacts = localStorage.getItem("contacts");
		if (contacts) {
			setData(JSON.parse(contacts))
		}
	}, []);

	
	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm
	} = useFormik({
		initialValues: {
			username: "",
			phone: "",
			gender: "",
		},
		validationSchema: basicSchema,
		onSubmit: (values) => {
			try {
				if (values.gender === "Gender") {
					toast.error("Please enter a gender");
					console.log(values);
				} else {
					submitForm();
					resetForm();
					toast.success("Contact added!")
				}
			} catch (error) {
				toast.error(error.message);
			}
		},
		onSubmitError: error => {
			toast.error(error.message)
		}
	});

	// const mainURL = "https://22112.fullstack.clarusway.com/contacts/";

	//   useEffect(() => {
	//     fetch(mainURL)
	//         .then(res => res.json())
	//         .then(array => setData(array))
	//         .then(console.log(data));
	// }, [flag, data])

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
									value={values.username}
									name="username"
									type="text"
									placeholder="Enter Username"
									className={
										errors.username && touched.username
											? "input-error"
											: ""
									}
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
									className={
										errors.username && touched.username
											? "input-error"
											: ""
									}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Select
									name="gender"
									type="string"
									// value={values.gender}
									onChange={handleChange}
									onBlur={handleBlur}
									defaultValue={"Gender"}
								>
									<option disabled>Gender</option>
									<option>MALE</option>
									<option>FEMALE</option>
								</Form.Select>
							</Form.Group>

							<Button
								disabled={isSubmitting}
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
									<th>Username</th>
									<th>Phone</th>
									<th>Gender</th>
									<th>Edit</th>
									<th>Delete</th>
								</tr>
							</thead>
							<tbody>
								{data &&
									data.map((contact, index) => {
										return (
											<tr key={index + 1}>
												<th>{index + 1}</th>
												<th>{contact.username}</th>
												<th>{contact.phone}</th>
												<th>{contact.gender}</th>
												<th></th>
												<th></th>
											</tr>
										);
									})}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
			<ToastContainer
				position="bottom-right"
				theme="dark"
				autoClose={7000}
				newestOnTop={true}
			/>
		</>
	);
};

export default Homepage;
