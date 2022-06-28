import AsteriscoObligatorio from '../AsteriscoObligatorio/AsteriscoObligatorio'
import styles from './Input.module.css'

export default function Input(props){
  return(
    <div className={styles.container}>
      <input value={props.value} onChange={e=>props.setValue(e.target.value)} className={styles.input} placeholder={props.placeholder} autoComplete='false'/>
      {props.obligatorio?
      <AsteriscoObligatorio/>
    :<AsteriscoObligatorio transparent/>}
    </div>
  )
}