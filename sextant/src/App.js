import "./App.css";

const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <h1 style={styles.bannerText}>IP's latency information</h1>
    </div>
  );
};

const styles = {
  bannerContainer: {
    backgroundColor: "lightgray",
    padding: "20px",
    textAlign: "center",
  },
  bannerText: {
    color: "white",
    fontWeight: "bold",
  },
};

function App() {
  return <Banner></Banner>;
}

export default App;
