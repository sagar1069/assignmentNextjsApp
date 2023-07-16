import React from 'react'
import styles from './Assessment.module.css'
function Assessment() {
  return (
    <div className={styles.mainContainer}>
        <div>
            Assessments Overview
        </div>
        <div className={styles.align}>
            <div>
                <div>
                Total Assessment
                </div>
                <div className={styles.align}>
                    <div>
                    image
                    </div>
                    <div>
                        34
                    </div>
                </div>
            </div>
            <div>
                <div>
                  candidates
                </div>
                <div>
                    <div>
                        image
                    </div>
                    <div>
                        <div>
                            11,145
                        </div>
                        <div>
                            +89
                        </div>

                        
                    </div>
                    <div>
                        Total Candidate
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Assessment
