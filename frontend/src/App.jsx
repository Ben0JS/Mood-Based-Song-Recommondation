import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";
import SongList from "./components/SongList";
import Recommendations from "./components/Recommendations";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [refreshList, setRefreshList] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Called when user clicks "Add Song" in MoodList
  const onAddSong = (mood) => {
    setSelectedMood(mood);
  };

  // Called when a mood or song is added/edited/deleted successfully
  const onSuccess = () => {
    setRefreshList(prev => !prev);
    setRefreshKey(prev => prev + 1);
  };

  const MoodsPage = () => (
    <div>
      <MoodForm selectedMood={selectedMood} onSuccess={onSuccess} />
      <MoodList 
        key={refreshList} 
        onAddSong={onAddSong} 
        refreshList={refreshList} 
      />
      {selectedMood && <SongList moodId={selectedMood._id} />}
    </div>
  );

  return (
    <Router>
      <div className=" bg-dark text-light mg">
        <NavBar />
        <div className="">
          <Routes>
            <Route path="/" element={<MoodsPage />} />
            <Route 
              path="/recommendations" 
              element={<Recommendations refreshKey={refreshKey} />} 
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
