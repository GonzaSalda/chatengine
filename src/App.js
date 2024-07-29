import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="5be14940-cd92-446a-a33e-efff5cc1172c"
      userName="JsMastery"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};
export default App;
