import { useEffect, useState } from "react";
import { AlertMessageContainer } from "./style";

export interface IAlerMessage {
  message: string;
  severity?: string;
  visibility: boolean;
}

export default function AlertMessage({
  message,
  severity = "success",
  visibility = false,
}: IAlerMessage) {
  const [alertVisibility, setAlertVisibility] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlertVisibility(false);
    }, 3000);
  }, [visibility]);

  return (
    <>
      {alertVisibility && (
        <AlertMessageContainer
          statusColor={severity === "success" ? "green" : "red"}
        >
          {message}
        </AlertMessageContainer>
      )}
    </>
  );
}
