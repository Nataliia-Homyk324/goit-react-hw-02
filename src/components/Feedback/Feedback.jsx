import css from "./Feedback.module.css"
import PropTypes from "prop-types";
import { VscStarEmpty,VscStarHalf,VscStarFull } from "react-icons/vsc";


function Feedback({ feedbackObj,feedbackTotal, feedbackPositive }) {
    const { good, neutral, bad } = feedbackObj;
    return (
        <>
            <div className={css.feedbackWrapper}>
                <p className={css.feedbackParagraf}><VscStarEmpty />Good:{good} </p>
                <p className={css.feedbackParagraf}><VscStarHalf />Neutral:{neutral} </p>
                <p className={css.feedbackParagraf}><VscStarFull />Bad:{bad} </p>
            </div>
            <div className={css.feedbackWrapper}>
                <p className={css.feedbackParagraf}>Total:{feedbackTotal}</p>
                <p className={css.feedbackParagraf}>Positive:{feedbackPositive}%</p>
                 
            </div>
        </>
    )
}

export default Feedback;

Feedback.protoType = {
  feedbackObj: PropTypes.objectOf(PropTypes.number),
  feedbackTotal: PropTypes.number,
  feedbackPositive: PropTypes.number,
};
