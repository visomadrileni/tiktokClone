import React, { useState, useEffect } from "react";
import Header from './components/Header'
import Video from "./components/Video";
import Download from './components/Download'
import Footer from './components/Footer';
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    // BEM
    <div className="app">
      <Header />
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
      <Download />
      <Footer />
    </div>
  );
}

export default App;
