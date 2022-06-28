import styles from './AsteriscoObligatorio.module.css'

export default function AsteriscoObligatorio(props){
    return<span className={props.transparent? styles.asteriscoTransparente:styles.asterisco}>*</span>
}