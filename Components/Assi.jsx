import { useState, useEffect } from "react";
import axios from "axios";

export default function Assi(){
    const [val, setVal] = useState("");
	const [streetAd, setStreetAd] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
    const [postalCode, setPostalCode] = useState("");
	const [phnType, setPhnType] = useState("");
	const [phn, setPhn] = useState("");

	useEffect(function () {
		axios
			.get("todo.json")
			.then(function (res) {
				console.log(res.data);
				setVal(res.data);
				setStreetAd(res.data.address.streetAddress);
				setCity(res.data.address.city);
				setState(res.data.address.state);
				setPostalCode(res.data.address.postalCode);
				setPhnType(res.data.phoneNumbers[0].type);
				setPhn(res.data.phoneNumbers[0].number);
			})
			.catch(function (err) {
				console.log(err);
			});
	}, []);

	return (
		<div className="UserDetails">
			<style>{"table,tr,th,td{border:2px solid red;}"}</style>
			<h1>assignment 1</h1>
			<table>
				<tr>
					<th>firstName</th>
					<th>lastName</th>
					<th>gender</th>
					<th>age</th>
					<th>address</th>
					<th>phoneNumbers</th>
				</tr>
				<tr>
					<td>{val.firstName}</td>
					<td>{val.lastName}</td>
					<td>{val.gender}</td>
					<td>{val.age}</td>
					<td>
						{streetAd}, {city},<br /> {state}, {postalCode}
					</td>
					<td>
						{phnType} - {phn}
					</td>
				</tr>
			</table>
		</div>
	);
}