import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './OffCanva.module.css'
function OffCanva(props) {
  return (
    props.show?(
    <div>
        <div className={styles.padding}>
        <div className={styles.div1}>
        <img className={styles.dashboard} src="/dashboard.svg" alt='dashboard'/>
        <div className={styles.dash}>Dashboard</div>
        </div>
        <div className={styles.div1}>
        <img  className={styles.dashboard}  src="/Assessment.png" alt='Assessment'/>
        <div className={styles.dashboard}>Assessment</div>
        </div>
        <div  className={styles.div1}>
        <img  className={styles.dashboard}  src="/quiz.svg" alt='quiz'/>
        <div className={styles.dashboard1} >
            My Library
        </div>
        </div>
        <div className={styles.div2}>
            <div  className={styles.Admin}>
                Admin
            </div>
            <img  className={styles.dashboard}  src="/RoundStatus.svg" alt='RoundStatus'/>
            <div className={styles.dashboard}>
                Round Status
            </div>
        </div>
        </div>
      </div>
    ):null
  )
}

export default OffCanva