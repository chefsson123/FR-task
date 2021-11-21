import './Modal.css'
const Modal = (props) => {

    return <div id="myModal" class="modal">
    <div class="modal-content">
     
      {props.children}
      </div>
    </div>
}

export default Modal;