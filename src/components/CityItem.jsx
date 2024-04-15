import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(date));

function CityItem({ city }) {
	const { cityName, emoji, date, id, position } = city;

	return (
		<li>
			{/* The id is the data that we want to pass from one page to another using URL parameters */}
			{/* After the id parameter is a query string after ?. lat and lng are simple variable names or we can think of it as parameters */}
			<Link
				className={styles.cityItem}
				to={`${id}?lat=${position.lat}&lng=${position.lng}`}
			>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.data}>({formatDate(date)})</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
}

export default CityItem;
