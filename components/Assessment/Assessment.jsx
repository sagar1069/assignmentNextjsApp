import React from "react";
import styles from "./Assessment.module.css";
import data from './Assessment.json'
import AddAssesment from "../AddAssesment/AddAssesment";
function Assessment() {
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick=()=>{
    setModalShow(true)
  }
  return (
    <div className={styles.mainContainer}>
      
      <div className={styles.AssignmentOverview}>Assessments Overview</div>
      <div className={styles.align}>
        <div className={styles.firstDiv}>
          <div className={styles.totalAssignment}>Total Assessment</div>
          <div className={styles.align2}>
            <div>
              <img src="/TotalAssignmentButton.png" alt="TotalAssignmentButton" />
            </div>
            <div className={styles.value}>34</div>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.candidates}>Candidates</div>
          <div className={styles.div3}>
            <div>
              <img src="/candidateImg.png" alt="candidateImg" />
            </div>
            <div className={styles.div5}>
              <div className={styles.div4}>
                <div className={styles.price}>11,145</div>
                <div className={styles.price2}>+89</div>
              </div>
              <div className={styles.totalCandidate}>Total Candidate</div>
            </div>
            <div className={styles.div7}>
              <div className={styles.div6}>
                <div>1,14</div>
                <div className={styles.price3}>+89</div>
              </div>
              <div className={styles.attempted}>Who Attempted</div>
            </div>
          </div>
        </div>
        <div className={styles.div8}>
          <div className={styles.candidates}>Candidates Sources</div>
          <div className={styles.div3}>
            <div>
              <img src="/CandidateResources.png" alt="CandidateResources" />
            </div>
            <div className={styles.div5}>
              <div className={styles.div4}>
                <div className={styles.price}>11,000</div>
                <div className={styles.price2}>+89</div>
              </div>
              <div className={styles.totalCandidate}>E-mail</div>
            </div>
            <div className={styles.div9}>
              <div className={styles.div6}>
                <div>145</div>
                <div className={styles.price3}>+89</div>
              </div>
              <div className={styles.attempted}>Social Share</div>
            </div>
            <div className={styles.div7}>
              <div className={styles.div6}>
                <div>145</div>
                <div className={styles.price3}>+89</div>
              </div>
              <div className={styles.attempted}>Unique Link</div>
            </div>
          </div>
        </div>
        <div className={styles.div10}>
          <div className={styles.totalPurpose}>Total Purpose</div>
          <div className={styles.div12}>
            <div>
              <img src="TotalPurpose.png" alt="" />
            </div>
            <div className={styles.price4}>11</div>
          </div>
        </div>
      </div>
      <div className={styles.Assessments} >
          My Assessment
        </div>
      <div className={styles.div14}>
        
        <div className={styles.div11}>
          <div >
            <img className={styles.img} src="add.svg" alt="add" onClick={handleClick}/>
          </div>
          <div className={styles.new}>
          New Assessment
          </div>
          <div className={styles.content}>
          From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
          </div>
        </div>
        {data.map((e)=>(
          <div className={styles.div13}>
          <div className={styles.divs}>
            <div className={styles.bags}>
            <img src="/bag.svg" alt="bag"/>
            </div>
            <div className={styles.dot}>
            <img className={styles.dots} src="/3 dot.svg" alt="3 dot"/>
            </div>
          </div>

          <div className={styles.mathAssesment}>
         {e.assignment}
          </div>
          <div className={styles.div15}>
            <div className={styles.job}>
            {e.types}
            </div>
            <div className={styles.calendar}>
              <img src="calendar_today.svg" alt="calendar_today"/>
            </div>
            <div className={styles.date}>
            {e.date}
            </div>
          </div>
          <div className={styles.div16}>
            <div className={styles.duration}>
              <div>
              {e.duration}
              </div>
              <div>
              Duration
              </div>
            
            </div>
            <div className={styles.duration}>
              <div>
              {e.questions}
              </div>
              <div>
              Questions
              </div>
           
          </div>
          <div className={styles.width1}>
          <div className={styles.share}>
            <img src='/link.svg' alt='link'/>
            share
          </div>
          </div>
         
          <div className={styles.width2}>
            
            {e.particaipants.map((y)=>(
              <div className={styles.lp}>
                {y}
              </div>
            ))}
           
          
          </div>
          </div>
          
          
        </div>
        ))}
        
      </div>
      <AddAssesment show={modalShow} onHide={()=>setModalShow(false)}/>
    </div>
  );
}

export default Assessment;
