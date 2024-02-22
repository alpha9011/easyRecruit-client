import Chatbot from "react-chatbot-kit";
import config from "../../../chat.config";
import MessageParser from "../../../MessageParser";
import ActionProvider from "../../../ActionProvider";




const ChatbotKit = () => {
    return (
        <div>
            <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            ></Chatbot>
        </div>
    );
};

export default ChatbotKit;

