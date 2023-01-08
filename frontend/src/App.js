import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import "./App.css";
import Chat from "./pages/Chat";
import ChatContent from "./components/Chat/ChatContent";
import { ContextProvider } from "./context/ContextProvider";
import SharedFiles from "./components/Chat/SharedFiles";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div className="flex flex-row">
          <div className="w-20 bg-white">
            <Sidebar />
          </div>
          <Routes>
            <Route path="/message" element={<Chat />}>
              <Route path=":conversationId" element={() => (<>
                <ChatContent />
                <SharedFiles />
              </>)} />
            </Route>
          </Routes>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
