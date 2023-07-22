import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Assessment from "../Assessment/Assessment";
import OffCanva from "../OffCanva/OffCanva";
import styles from "./dashboard.module.css";
function Dashboard() {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.canvaAlignment}>
     

      <div className={styles.canvaWidth} >
      <OffCanva show={show} />
      </div>
      <div className={styles.div1}>
        <div className={styles.img}>
        <img className={styles.offcanvaImg} src="OffCanva.svg" alt="OffCanva"/>
        </div>
        <div className={styles.assesses}>
        Assessment
        </div>
      </div>
      
   
      
      <Tabs defaultActiveKey="profile"    id="justify-tab-example"
     className={styles.tabs}  justify>
       
        <Tab eventKey="home" title=" My Assessments" className={styles.Assessment}>
          <Assessment />
        </Tab>
        <Tab eventKey="profile" title="Unstop Assessments" className={styles.removebackground} >
        Tab content for Unstop Assessments
      </Tab>
     
      </Tabs>
      <div>
     
      </div>
    </div>
  );
}

export default Dashboard;
