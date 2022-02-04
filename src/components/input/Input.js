import styles from './Input.module.css'

export default function Input(){
  return(
    <div className={styles.container}>
      <input className={styles.input} placeholder='Su email, por favor' autoComplete='false'/>
    </div>
  )
}