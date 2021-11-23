import React from "react";

const Filter = (props) => {

    const handleShowChange = (event) => {
        console.log(event.target.value)
        props.setShow(event.target.value)
        if(event.target.value === '') {
            props.setShowAll(true)
        } else {
            props.setShowAll(false)
        }
      }

    return (
        <form>
        <div>filter shown with <input value={props.show} onChange={handleShowChange} />
        </div>
        </form>
    )
  }

  export default Filter