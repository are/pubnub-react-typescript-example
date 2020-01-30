import * as React from "react";

import { usePubNub } from "./pubnub";

export const Child: React.FC = () => {
  const pubnub = usePubNub();
  const [time, setTime] = React.useState<number | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    pubnub
      .time()
      .then(({ timetoken }) => setTime(timetoken))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Unexpected error: {error}</div>;
  }

  if (!time) {
    return <div>Loading...</div>;
  }

  return <div>Current PubNub time: {time}</div>;
};
