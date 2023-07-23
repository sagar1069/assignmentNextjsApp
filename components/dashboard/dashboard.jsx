import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Assessment from "../Assessment/Assessment";
import MobileCanva from "../MbileCanva/MobileCanva";
import OffCanva from "../OffCanva/OffCanva";
import styles from "./dashboard.module.css";
function Dashboard() {
  const [show, setShow] = useState(true);
  const [mobileShow,setMobileShow]=useState(false)
  return (
    <div className={styles.canvaAlignment}>
     

      <div className={styles.canvaWidth} >
      <OffCanva show={show} />
      </div>
      <div className={styles.div1}>
        <div className={styles.img}>
        <img className={styles.offcanvaImg} src="OffCanva.svg" alt="OffCanva" onClick={()=>setMobileShow(true)}/>
        </div>
        <div className={styles.assesses}>
        Assessment
        </div>
      </div>
      
   <div className={styles.div2}>
   
   <Tabs defaultActiveKey="home"    id="justify-tab-example"
     className={styles.tabs}   >
 <Tab eventKey="Assessments" title=" Assessments" tabClassName={styles.hide} disabled>
          <Assessment />
        </Tab>
        <Tab eventKey="home" title=" My Assessments" >
          <Assessment />
        </Tab>
    
        <Tab eventKey="profile" title="Unstop Assessments"  tabClassName={styles.removebackground}>
        Click on My Assessments to view My Assessment
      </Tab>
   
     
      </Tabs>
   </div>
      
     
      <MobileCanva show={mobileShow} onHide={()=>setMobileShow(false)}/>
    </div>
  );
}

export default Dashboard;
