import "./Settings.css";
import StatusSlider from "./StatusSlider";

const Settings = () => {
  return (
      <div>
    <div className="container"><h1>Settings</h1></div>
    <div className="settings">
      <div className="user cont"><i className="fa fa-user-circle-o"></i><p>Upload Photo</p>
      <div className="user-info">
      <h1>Daniel BLinchman</h1>
      <p>danielblinchman@gmail.com</p>
      </div>
      <button className="resend">Resend Invitation</button></div>
      <div className="details cont">
        <h2>Details</h2>
        <form>
  <label htmlFor="fname">* First Name</label>
  <input type="text" id="fname" name="firstname"/>

  <label htmlFor="lname">* Last Name</label>
  <input type="text" id="lname" name="lastname" />

  <label htmlFor="role">* Role</label>
  <select id="role" name="role">
    <option value="admin">Admin</option>
    <option value="user">User</option>
  
  </select>

  
</form>
      </div>
      <div className="permissions cont">
        <h2>Permissions</h2>
        <div className="permission"><h5>Super Admin</h5><StatusSlider /></div>
        <div className="permission"><h5>Permission Group</h5><StatusSlider /></div>
        <div></div>
        <div></div>
      </div>
    </div>
    </div>
  );
};

export default Settings;
