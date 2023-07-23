import React from 'react'
import { Offcanvas } from 'react-bootstrap'
import styles from './MobileCanva.module.css'
function MobileCanva(props) {
  return (
    <Offcanvas {...props}>
           <Offcanvas.Header closeButton>
          <Offcanvas.Title className={styles.menu}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
    <div>
        <div className={styles.padding}>
        <div className={styles.div1}>
            <div>
            <img className={styles.dashboard} src="/dashboard.svg" alt='dashboard'/>
            </div>

        <div className={styles.dash}>Dashboard</div>
        </div>
        <div className={styles.div1}>
        <img  className={styles.dashboard}  src="/Assessment.png" alt='Assessment'/>
        <div className={styles.dash}>Assessment</div>
        </div>
        <div  className={styles.div1}>
        <img  className={styles.dashboard}  src="/quiz.svg" alt='quiz'/>
        <div className={styles.dash} >
            My Library
        </div>
        </div>
        <div className={styles.div2}>
           
            <div>
            <img  className={styles.dashboard3}  src="/RoundStatus.svg" alt='RoundStatus'/>
            </div>
           
            <div className={styles.dashboard2}>

                Round Status
            </div>
            <div  className={styles.Admin}>
                Admin
            </div>
        </div>
        </div>
      </div>
  </Offcanvas>
  )
}

export default MobileCanva