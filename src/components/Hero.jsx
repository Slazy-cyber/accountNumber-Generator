
import React, { useState } from "react";

export default function Hero() {
	const [form, setForm] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	const [accountNumber, setAccountNumber] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const generateAccountNumber = () => {
		
		return Math.floor(1000000000 + Math.random() * 9000000000).toString();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setAccountNumber(generateAccountNumber());
	};

	return (
		<div
			className="container d-flex justify-content-center align-items-center min-vh-100"
			
		>
			<div className="card shadow p-4" style={{ minWidth: 350, background: "#eaffea" }}>
				<h2 className="mb-4 text-center">Account Number Generator</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label className="form-label">First Name</label>
						<input
							type="text"
							className="form-control"
							name="firstname"
							value={form.firstname}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Last Name</label>
						<input
							type="text"
							className="form-control"
							name="lastname"
							value={form.lastname}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							value={form.password}
							onChange={handleChange}
							required
						/>
					</div>
					<button type="submit" className="btn btn-success w-100 shadow">
						Generate Account Number
					</button>
				</form>
				{accountNumber && (
					<div className="alert alert-success mt-4 text-center shadow">
						<strong>Your Account Number:</strong>
						<div style={{ fontSize: "1.5rem", letterSpacing: 2 }}>{accountNumber}</div>
					</div>
				)}
			</div>
		</div>
	);
}
