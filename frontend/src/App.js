import './App.css';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageSlider from "./components/ImageSlider/ImageSlider";

function App() {
  const slides = [
    { url: "https://www.theindianwire.com/wp-content/uploads/2019/06/Why-Startups-are-More-Popular-than-Ever-1.jpg", title: "beach" },
    { url: "https://www.rhsmith.umd.edu/sites/default/files/research/2021/best-way-to-build-a-startup-team.jpg", title: "boat" },
    { url: "https://emotionalegghead.com/wp-content/uploads/2021/06/investmentemotionalegghead-scaled.jpg", title: "city" },
    { url: "https://lgidirect.com.sg/wp-content/uploads/2022/08/Newsletter_AIDawn_KV.png", title: "italy" },
    { url: "https://scaalex.com/wp-content/uploads/2021/09/Scaalex-HOW-TO-ATTRACT-INVESTORS.gif", title: "forest" },
  ];
  // https://startupsmagazine.co.uk/sites/default/files/2020-11/AdobeStock_376814606.jpg
  //https://www.forbesindia.com/media/images/2022/Aug/img_192695_corporateventurecapital.jpg
  //https://unblast.com/wp-content/uploads/2021/10/Signing-Contract-Illustration.jpg
  const containerStyles = {
    width: "98%",
    height: "800px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
  // return (
  //   <>
  //     <Router>
  //       <Routes>
  //         <Route path="/register" Component={Register} element={<Register />} />
  //       </Routes>
  //     </Router>
  //   </>
  // );
}

export default App;
