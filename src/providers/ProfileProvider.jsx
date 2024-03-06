/* eslint-disable react/prop-types */

import { useReducer } from "react";
import { initialState, profileReducer } from "../reducers/ProfileReducer";
import { ProfileContext } from "../context";

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.provider>
  );
};

export default ProfileProvider;
