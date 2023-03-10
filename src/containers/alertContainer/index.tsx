import React from "react";

import AlertBox from "../../components/alertBox";
import Alert from "../../components/alert";

type alertProps = {
  error: string;
};

function AlertContainer(props: alertProps) {
  const { error } = props;

  return (
    <AlertBox>
      <Alert type="error" show={error.length > 0}>
        {error}
      </Alert>
    </AlertBox>
  );
}

export default AlertContainer;
