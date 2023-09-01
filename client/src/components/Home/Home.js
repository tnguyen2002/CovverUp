import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import Groupme from "../Groupme/Groupeme";
import Stability from "../Stability/Stability";
import "./Home.css";

const Homepage = () => {
	const [groups, setGroups] = useState([]);

	// const handleImageUpload = async (event) => {
	// 	const imageFile = event.target.files[0];
	// 	const reader = new FileReader();
	// 	reader.onload = (event) => {
	// 		const imageData = event.target.result;
	// 		const blob = new Blob([imageData], { type: imageFile.type });
	// 		console.log(blob); // You can use the 'blob' object as needed
	// 		setImageBlob(blob);
	// 	};
	// 	reader.readAsArrayBuffer(imageFile);
	// 	// }
	// };

	return (
		<div className="HomeContainer">
			<div>
				{groups.map((group, key) => {
					return (
						<div key={key}>
							{group.name}
							{group.image_url ? (
								<img height="25px" src={group.image_url} alt={group.name} />
							) : (
								<div>No image</div>
							)}
						</div>
					);
				})}
			</div>
			<Stability groups={groups} setGroups={setGroups} />
			<Groupme groups={groups} setGroups={setGroups} />
		</div>
	);
};

export default Homepage;
