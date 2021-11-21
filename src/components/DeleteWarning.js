
import Modal from "./Modal";

const DeleteWarning = (props) => {
  return (
    <Modal>
        <p>Are you sure you want to delete this user?</p>
        <button className="delete" onClick={props.delete}>
          Delete
        </button>{" "}
        <button classname="back" onClick={props.toggleModal}>
          Back to page
        </button>
        </Modal>
     
  );
};

export default DeleteWarning;
