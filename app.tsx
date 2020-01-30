import * as React from "react";

import { PubNubProvider } from "./pubnub";
import { Child } from "./child";

export const App: React.FC = () => {
  return (
    <PubNubProvider>
      <Child />
    </PubNubProvider>
  );
};
