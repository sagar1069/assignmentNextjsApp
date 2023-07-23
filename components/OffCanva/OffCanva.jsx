import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './OffCanva.module.css'
function OffCanva(props) {
  const selectAssessment=(e)=>{
    const styles=document.getElementById('2')
    styles.style.backgroundColor= '#E5F1FC';
    styles.style.borderRadius= '8px';
styles.style.border= '1px solid var(--secondary-1, #0073E6)';
  }
  return (
    props.show?(
    <div>
        <div className={styles.padding}>
        <div className={styles.div1} value="1" onClick={(e)=>selectAssessment(e)}>
        <img className={styles.dashboard} src="/dashboard.svg" alt='dashboard'/>
        <div className={styles.dash}>Dashboard</div>
        </div>
        <div className={styles.div1} id="2" onClick={(e)=>selectAssessment(e)}>
        <img  className={styles.dashboard}  src="/Assessment.png" alt='Assessment'/>
        <div className={styles.dash} >Assessment</div>
        </div>
        <div  className={styles.div1} value="3" onClick={(e)=>selectAssessment(e)}>
        <img  className={styles.dashboard}  src="/quiz.svg" alt='quiz'/>
        <div className={styles.dash}>
            My Library
        </div>
        </div>
        <div className={styles.div2}>
            <div  className={styles.Admin}>
                Admin
            </div>
            <img  className={styles.dashboard}  src="/RoundStatus.svg" alt='RoundStatus'/>
            <div className={styles.dash}>
                Round Status
            </div>
        </div>
        </div>
      </div>
    ):null
  )
}

export default OffCanva