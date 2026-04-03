import Background from "../components/Background";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Background />
            <Navbar />
            <h1 style={{ color: "white", textAlign: "center", marginTop: "40vh" }}> CHESS AI </h1>
        </>
    );
};

export default Home;