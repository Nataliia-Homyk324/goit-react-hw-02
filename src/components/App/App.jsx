import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import css from './App.module.css'
import { useState, useEffect } from "react";


function App() {
  
const [values, setValues] = useState(() => {
  const savedValues = window.localStorage.getItem("saved-values");
  if (savedValues !== null) {
    return JSON.parse(savedValues);
  } else {
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
});
  
  
    useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
    }, [values]);
    
    const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round(
    ((values.good + values.neutral) / totalFeedback) * 100
    );
    
    const updateFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
    };
    
  
  const resetFeedbackButton = () => setValues({
    good: 0,
    neutral: 0,
    bad: 0,
});
    

    return (
        <section className={css.container}>
        <Description />
        <Options
        onClickFeedback={(option) => updateFeedback(option)}
        resetFeedback={totalFeedback >= 1}
        resetButton={resetFeedbackButton}
        />
       {totalFeedback > 0 ? 
        <Feedback
          feedbackObj={values}
          feedbackTotal={totalFeedback}
          feedbackPositive={positiveFeedback}
        />: <Notification />}

        </section>
    )
}

export default App;