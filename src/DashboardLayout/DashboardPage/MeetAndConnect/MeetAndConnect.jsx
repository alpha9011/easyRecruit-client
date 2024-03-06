import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import useAuth from "../../../Hooks/useAuth";

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}
const MeetAndConnect = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useAuth();

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

  let mySupporting = async (element) => {
    // generate Kit Token
    const appID = 1391604880;
    const serverSecret = "6a2b2e7cd3684ea89570527c0c349ab7";

    // const appID = import.meta.env.VITE_APP_ID;
    // const serverSecret = import.meta.env.VITE_SERVER_SECRET;

    console.log("appid ", appID);
    console.log("serverSecret", serverSecret);

    // users's name dynamically
    const userName = user ? user.displayName : " ";

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
      ref={mySupporting}
      style={{ width: "full", height: "full" }}
    ></div>
  );
};

export default MeetAndConnect;
