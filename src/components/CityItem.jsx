import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(date));

function CityItem({ city }) {
	const { currentCity, deleteCity } = useCities();
	const { cityName, emoji, date, id, position } = city;

	function handleClick(e) {
		e.preventDefault();
		deleteCity(id);
	}

	return (
		<li>
			{/* The id is the data that we want to pass from one page to another using URL parameters */}
			{/* After the id parameter is a query string after ?. lat and lng are simple variable names or we can think of it as parameters */}
			<Link
				className={`${styles.cityItem} ${
					id === currentCity.id ? styles["cityItem--active"] : ""
				}`}
				to={`${id}?lat=${position.lat}&lng=${position.lng}`}
			>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.data}>({formatDate(date)})</time>
				<button className={styles.deleteBtn} onClick={handleClick}>
					&times;
				</button>
			</Link>
		</li>
	);
}

export default CityItem;
