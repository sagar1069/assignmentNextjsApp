import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Assessment from '../Assessment/Assessment';
import styles from './dashboard.module.css'
function Dashboard() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className={styles.main}
      
    >
       <Tab eventKey="contact" title="Assessment" disabled>
       Assessment
      </Tab>
      <Tab eventKey="home" title=" My Assessments">
        <Assessment/>
      </Tab>
      <Tab eventKey="profile" title="Profile" className={styles.removebackground} >
        Tab content for Profile
      </Tab>
     
    </Tabs>
  )
}

export default Dashboard
