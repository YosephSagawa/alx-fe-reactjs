import { useContext } from "react";
import { UserContext } from "./UserContext.js";
function UserProfile(props) {
  const { name } = useContext(UserContext);
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
