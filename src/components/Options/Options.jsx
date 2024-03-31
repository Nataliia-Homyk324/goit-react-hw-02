// import PropTypes from "prop-types";
import css from "./Options.module.css";

function Options() {
    return (
        <ul className={css.buttonList}>
            <li>
                <button className={css.mainButton}>Good</button>
            </li>
            <li>
                <button className={css.mainButton}>Neutral</button>
            </li>
            <li>
                <button className={css.mainButton}>Bad</button>
            </li>
            <li>
                <button className={css.mainButton}>Reset</button>
            </li>
        </ul>

    );
    
}

export default Options;