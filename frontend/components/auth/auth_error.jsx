import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AuthError = ({ error }) => {
  return (
    <div className="auth-error">
      <FontAwesomeIcon icon="exclamation-circle" className="auth-error-icon" />
      <span className="auth-error-text">{error}</span>
    </div>
  );
}

export default AuthError;