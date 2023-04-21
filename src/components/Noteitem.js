import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNotes } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-item-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-square-pen mx-2"
              onClick={() => {
                updateNotes(note);
              }}
            ></i>
            <i
              className="fa-regular fa-trash-can mx-2"
              onClick={() => {
                deleteNote(note._id);
                props.showAlert("Deleted successfully", "success");
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
