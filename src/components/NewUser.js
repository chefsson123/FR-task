
import Modal from './Modal'
import './NewUser.css'

const NewUser = (props) => {


    return  <Modal>
        <h4>{props.error}</h4>
    
    <h1 className="invite">Invite New User</h1>
    <form onSubmit={props.addUser} >
        <input className="fn" type="text" placeholder="* First Name" onChange={props.getFN}></input>
        <input className="ln" type="text" placeholder="* Last Name" onChange={props.getLN}></input>
        <input className="mail" type="text" placeholder="* Email" onChange={props.getEmail}></input>
        <select id="roles">
  <option value="admin">Admin</option>
  <option value="user">user</option>

</select>
        <button type="submit">Resend Invitation</button>
    </form>

    </Modal>
}

export default NewUser;