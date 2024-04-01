import css from './Description.module.css'
import { VscCoffee } from "react-icons/vsc";


function Description() {
    return(<>
        <h1 className={css.mainTitle}>Sip Happens Café <VscCoffee /></h1>
        <p className={css.mainParagraf}>Please leave your feedback about our service by selecting one of the options below.</p>
    </>)
    
}
export default Description;