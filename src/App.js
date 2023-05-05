import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Rohit Bachhav",
    location: "Pune, Maharashtra",
    email: "bachhavrohit21@gmail.com",
    availability: "Open for work",
    brand:
    "I am a driven and ambitious individual with a passion for technology and a desire to pursue a career in IT engineering. As a Designer I believe in setting ego aside and creating an experience that caters to the user's needs. I have a passion for an organized workflow, designing visual languages, and solving complex problems."
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
