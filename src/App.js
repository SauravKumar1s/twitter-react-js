import "./App.css";
import TwitterFeed from "./components/TwitterFeed";

import TwitterSidebar from "./components/TwitterSidebar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="sidebarr">
        <TwitterSidebar />
      </div>
      <div className="App">
        <TwitterFeed />
        <Search />
      </div>
    </>
  );
}

export default App;
