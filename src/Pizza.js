import React from "react";

export default function Pizza() {
  const onChange = () => {};
  const onSubmit = () => {};

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group-inputs">
        {/*Name input  */}
        <label>
          How wants this Za?
          <input
            type="text"
            name="name"
            placeholder="za eater"
            onChange={onChange}
          />
        </label>
        {/* DropDown */}
        <label>
          What size Za do you want?
          <select name="size" onChange={onChange}>
            <option value="">--Select Size--</option>
            <option value="big">Big</option>
            <option value="really big">Really Big</option>
            <option value="biggest">Biggest</option>
          </select>
        </label>
        <label>
          Peperoni
          <input type="checkbox" name="peperoni" onChange={onChange} />
        </label>
        <label>
          Sausage
          <input type="checkbox" name="sausage" onChange={onChange} />
        </label>
        <label>
          Peppers
          <input type="checkbox" name="peppers" onChange={onChange} />
        </label>
        <label>
          Everything
          <input type="checkbox" name="everything" onChange={onChange} />
        </label>
        <label>
            Special Instructions
            <input 
            type='text'
            name='specialInstructors'
            placeholder='anything we should know?'
            onChange={onChange}
            />
        </label>
      </div>
      <div className='submit'>
          <button>Order</button>
      </div>
    </form>
  );
}
