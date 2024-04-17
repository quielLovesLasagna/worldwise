import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
	// "Imperative" way of navigating to a route without using any link
	const navigate = useNavigate();

	// This is for QUERY STRINGS
	// This is like useState()
	const [searchParams, setSearchParams] = useSearchParams();
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div className={styles.mapContainer} onClick={() => navigate("form")}>
			<h1>Map</h1>
			<h2>
				Position: {lat}, {lng}
			</h2>
			<button
				onClick={() => {
					setSearchParams({ lat: 23, lng: 50 });
				}}
			>
				Change position
			</button>
		</div>
	);
}

export default Map;
