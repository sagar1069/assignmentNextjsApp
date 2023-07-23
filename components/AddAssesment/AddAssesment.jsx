import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Form, InputGroup, Modal } from "react-bootstrap";
import styles from "./AddAssesment.module.css";
function AddAssesment(props) {
  const [skillSet,setSkillset] = useState(["UI/UX and Design", "No of Question", "Web Development", "UI/UX and Design ", "Web Development"]);

  const filteredOptions = [
    { id: 1, name: "OPTION 1" },
    { id: 2, name: "OPTION 2" },
    { id: 3, name: "OPTION 3" },
    { id: 4, name: "OPTION 4 " },
    { id: 5, name: "OPTION 5" },
    { id: 6, name: "OPTION 6" },
    { id: 7, name: "OPTION 7" },
  ];

  const [inputValue, setInputValue] = useState("");
  const [dropdown, setShowDropdown] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowDropdown(true);
    if (event.target.value.length == 0) {
      setShowDropdown(false);
    }
  };
  function handleClose() {
    setShowDropdown(false);
    setInputValue("");
  }
  function handleOptionClick(option) {
    setInputValue(option.name);
    setShowDropdown(false);
  }
  const filteredOptions1 = [
    { id: 1, name: "OPTION 1" },
    { id: 2, name: "OPTION 2" },
    { id: 3, name: "OPTION 3" },
    { id: 4, name: "OPTION 4 " },
    { id: 5, name: "OPTION 5" },
    { id: 6, name: "OPTION 6" },
    { id: 7, name: "OPTION 7" },
  ];

  const [inputValue1, setInputValue1] = useState("");
  const [dropdown1, setShowDropdown1] = useState(false);
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
    setShowDropdown1(true);
    if (event.target.value.length == 0) {
      setShowDropdown1(false);
    }
  };
  function handleClose1() {
    setShowDropdown(false);
    setInputValue("");
  }
  function handleOptionClick1(option) {
    setInputValue(option.name);
    setShowDropdown(false);
  }
  function handleInputs(e) {
    console.log(e.code);
    if (e.code === "Enter") {
        setSkillset(skillSet => [...skillSet, e.target.value]);
    }
    console.log(skillSet);
  }
  const handleDelete=(name)=>{
    setSkillset(skillSet.filter((i)=>i!=name))
  }
  console.log(skillSet);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" dialogClassName={styles.main} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className={styles.assesment}>Create new assessment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className={styles.name}>Name of assessment</div>
          <div>
            <input className={styles.typeHere} placeholder="Type Here" />
          </div>
          <div className={styles.purpose}>Purpose of the test is</div>
          <div>
            <InputGroup className={styles.inpHeight}>
              <Form.Control className={styles.inputBox1} value={inputValue} onChange={handleInputChange} placeholder="Search Products..." />
              <InputGroup.Text className={styles.img2}>
                <img alt="search" src="/keyboard_arrow_down.svg" onClick={() => setShowDropdown(!dropdown)} />
              </InputGroup.Text>
            </InputGroup>
            {dropdown ? (
              <div className={styles.up}>
                {filteredOptions
                  .filter((post) => {
                    if (inputValue === "" || post.name.toLowerCase().includes(inputValue.toLowerCase())) {
                      return post;
                    }
                  })
                  .map((option, index) => {
                    if (index < 4) {
                      return (
                        <div className={styles.options} onClick={() => handleOptionClick(option)} key={option.id}>
                          {option.name}
                        </div>
                      );
                    }
                  })}
              </div>
            ) : null}
          </div>
          <div className={styles.name}>Description</div>
          <div>
            <InputGroup className={styles.inpHeight}>
              <Form.Control className={styles.inputBox1} value={inputValue1} onChange={handleInputChange1} placeholder="Search Products..." />
              <InputGroup.Text className={styles.img2}>
                <img alt="search" src="/keyboard_arrow_down.svg" onClick={() => setShowDropdown1(!dropdown1)} />
              </InputGroup.Text>
            </InputGroup>
            {dropdown1 ? (
              <div className={styles.up}>
                {filteredOptions1
                  .filter((post) => {
                    if (inputValue1 === "" || post.name.toLowerCase().includes(inputValue1.toLowerCase())) {
                      return post;
                    }
                  })
                  .map((option, index) => {
                    if (index < 4) {
                      return (
                        <div className={styles.options} onClick={() => handleOptionClick1(option)} key={option.id}>
                          {option.name}
                        </div>
                      );
                    }
                  })}
              </div>
            ) : null}
          </div>
          <div className={styles.name}>Skills</div>
          <div className={styles.border}>
            <div className={styles.skills}>
              {skillSet.map((skils) => (
                <div className={styles.skillSets}>
                  <div>{skils}</div>
                  <div>
                    <img src="/close.svg" alt="close" onClick={()=>handleDelete(skils)} />
                  </div>
                </div>
              ))}
            </div>

            <input className={styles.typeHere} placeholder="Type Here" onKeyDown={handleInputs} />
          </div>
          <div className={styles.name}>Duration of assessment</div>
          <div>
            <input className={styles.duration} placeholder="HH:MM:SS" onKeyDown={handleInputs} />
          </div>
          <div>
            <button className={styles.save}>Save</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddAssesment;
