import React, { useState, useEffect } from "react";
import SelectionRow from "./SelectionRow";
import TextArea from "../../Forms/Inputs/TextArea";
import axios from "axios";
import Button from "../../Forms/Inputs/Button";

const ManageImageAdmin = (props) => {
  const [comments, setComments] = useState(
    props.imageToDisplay.comments ? props.imageToDisplay.comments : ""
  );
  const reviewImage = (review_state) => {
    axios
      .post("http://localhost:3000/images/reviewImage", {
        review_state,
        comments,
        id: props.imageToDisplay.id,
      })
      .then((res) => {
        setComments("");
        res.status === 200 && props.nextImage(1);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="manage-image__row">
        <div>
          {props.imageToDisplay.selection.map((el, i) => (
            <SelectionRow
              key={i}
              selection={el}
              index={i}
              removeFromArray={props.removeFromArray}
              displaySelection={props.displaySelection}
            />
          ))}
        </div>
        <div>Submitted by: {props.imageToDisplay.email}</div>
      </div>

      <TextArea
        title={"Comments:"}
        value={comments}
        setValue={setComments}
        maxLength={500}
      />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button color="red" text="Reject" handleClick={() => reviewImage(2)} />
        <Button
          color="green"
          text="Approve"
          handleClick={() => reviewImage(1)}
        />
      </div>
    </div>
  );
};

export default ManageImageAdmin;
