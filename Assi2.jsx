import { useState, useEffect } from "react";
import axios from "axios";

export default function Assis(){
    const [val, setVal] = useState("");
	const [booln, setBooln] = useState("");
	const [pets, setPets] = useState("");
	const [pAd, setPAd] = useState("");
	const [cAd, setCAd] = useState("");
	const [pName, setPName] = useState("");
	const [cName, setCName] = useState("");

	useEffect(function () {
		axios
			.get("todo1.json")
			.then(function (res) {
				console.log(res.data);
				setVal(res.data);
				setBooln(res.data.Boolean.toString());
				setPets(res.data.Pets);
				let adrsKeys = Object.keys(res.data.Address);
				console.log(adrsKeys);
				let x = res.data.Address;
				setPName(adrsKeys[0]);
				setCName(adrsKeys[1]);
				setPAd(x["Permanent address"]);
				setCAd(x["current Address"]);
			})
			.catch(function (err) {
				console.log(err);
			});
	}, []);

	return (
		<div className="UserDetails">
			<style>{"table,tr,th,td{border:2px solid red;}"}</style>
			<h1>assignment 2</h1>
			<table>
				<tr>
					<th>Name</th>
					<th>Mobile</th>
					<th>Boolean</th>
					<th>Pets</th>
					<th>Address</th>
				</tr>
				<tr>
					<td>{val.Name}</td>
					<td>{val.Mobile}</td>
					<td>{booln}</td>
					<td>
						{pets[0]},<br /> {pets[1]}
					</td>
					<td>
						{pName} - {pAd}, <br />
						{cName} - {cAd}
					</td>
				</tr>
			</table>
		</div>
	);
}