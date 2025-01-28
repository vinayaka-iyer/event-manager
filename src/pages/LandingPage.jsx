import Background from "@/components/ui/Background";
import "./LandingPage.css";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";

const LandingPage = () => {

    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <>
            <Navbar />
            <Background>
                <div className="landing-page-content">
                    <h1 className="landing-page-headline">
                        Plan Events with Ease <br /> with EventEase
                    </h1>
                    <Button variant="outline" className="landing-page-get-started-button" onClick={handleClick}>Get Started</Button>
                </div>
            </Background>
        </>
    );
};

export default LandingPage;
