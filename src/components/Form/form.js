import React from "react";
import If from '../If/if.js';
import './form.scss';


function Form(props) {
  
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  function handleReqBodyChange(e) {
    props.onReqBoxChange(e.target.value);
  }

  function handleSubmit(e) {
    if (e.key === 'Enter' || (e.target && e.target.value === 'Submit')) {
      const selectedReq = document.querySelector('.selected-req');
      const textbox = document.querySelector('.reqBody-textbox');
      props.onSubmit(selectedReq.value, textbox.value);
    }
  }

  function handleBtnClick(e) {
    const prevSelected = document.querySelector('.selected-req');

    if (prevSelected) {
      prevSelected.classList.remove('selected-req');
    }

    e.target.classList.add('selected-req');
    props.onClick(e.target.value);
  }

  return (
    <If condition={props}>
      <div className="form">
        <div className="form-input">
          <div className="req-type">
            <button
              value="GET"
              className="selected-req"
              id="get-btn"
              onClick={handleBtnClick}
            >
              GET
            </button>
            <button value="POST" id="post-btn" onClick={handleBtnClick}>
              POST
            </button>
            <button value="PUT" id="put-btn" onClick={handleBtnClick}>
              PUT
            </button>
            <button value="PATCH" id="patch-btn" onClick={handleBtnClick}>
              PATCH
            </button>
            <button value="DELETE" id="delete-btn" onClick={handleBtnClick}>
              DELETE
            </button>
          </div>
          <div className="form-child">
            <label>{props.label}</label>
            <input
              className="url-textbox"
              name="url-textbox"
              type={props.type}
              value={props.value}
              onChange={handleChange}
              onKeyPress={handleSubmit}
            />
            <button
              value="Submit"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="form-child">
            <label>Body</label>
            <textarea
              className="reqBody-textbox"
              name="reqBody-textbox"
              onChange={handleReqBodyChange}
            />
          </div>
        </div>
      </div>
    </If>
  );
}

export default Form;
