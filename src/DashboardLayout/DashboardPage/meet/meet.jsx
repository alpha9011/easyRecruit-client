import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from "./constants";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}
const meet = () => {
  const { user } = useContext(AuthContext);

  function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }

  const roomID = getUrlParams().get("roomID") || randomID(5);
  // const roomID = "sazzad";

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = APP_ID;
    const serverSecret = SERVER_SECRET;

    // users's name dynamically
    const userName = user? user.displayName : " ";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      // Date.now().toString(),
      // randomID(5),
      userName
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showRoomTimer: "yes",
      showTurnOffRemoteCameraButton: "yes",
      showTurnOffRemoteMicrophoneButton: "yes",
      showRemoveUserButton: "yes",

      showInviteToCohostButton: "yes",
      showRemoveCohostButton: "yes",

      enableUserSearch: "yes",
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "full", height: "full" }}
    ></div>
  );
};

export default meet;
