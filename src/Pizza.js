import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  color: red;
  .toppings {
    display: flex;
    color: green;
    flex-direction: column;
  }
`;

export default function Pizza(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  
  const onSubmit = (evt) => {
    evt.preventDefault()
    submit();
  };

  return (
    <StyledForm className="form container" onSubmit={onSubmit}>
      <div className="form-group-inputs">
        {/*Name input  */}
        <div>
          <label>
            How wants this Za?
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={onChange}
              value={values.name}
            />
          </label>
        </div>
        {/* DropDown */}
        <div>
          <label>
            What size Za do you want?
            <select name="size" onChange={onChange} value={values.size}>
              <option value="">--Select Size--</option>
              <option value="big">Big</option>
              <option value="really big">Really Big</option>
              <option value="biggest">Biggest</option>
            </select>
          </label>
        </div>
        <div className="toppings">
          <label>
            Peperoni
            <input
              type="checkbox"
              name="peperoni"
              onChange={onChange}
              value={values.peperoni}
            />
          </label>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              onChange={onChange}
              value={values.sausage}
            />
          </label>
          <label>
            Peppers
            <input
              type="checkbox"
              name="peppers"
              onChange={onChange}
              value={values.peppers}
            />
          </label>
          <label>
            Everything
            <input
              type="checkbox"
              name="everything"
              onChange={onChange}
              value={values.everything}
            />
          </label>
        </div>
        <div>
          <label>
            Special Instructions
            <input
              type="text"
              name="specialInstructions"
              placeholder="anything we should know?"
              onChange={onChange}
            />
          </label>
        </div>
      </div>
      <div className="submit">
        <button className='orderButton'>Order</button>
      </div>
    </StyledForm>
  );
}
