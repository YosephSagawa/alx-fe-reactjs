import { UserContext } from "./Contexts/userContext";
import { useContext } from "react";
function UserDetails() {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserDetails;
