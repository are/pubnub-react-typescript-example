import PubNub from "pubnub";
import { createContext } from "pubnub-react";

const pubnub = new PubNub({ subscribeKey: "demo", publishKey: "demo" });

export const { PubNubProvider, PubNubContext, usePubNub } = createContext(
  pubnub
);
