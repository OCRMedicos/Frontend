import HeroSection from "../../components/HeroSection "
import AboutSection from "../../components/ About"
import ApplicationsSection from "../../components/Applications "
import CaseStudySection from "../../components/Case/Index"

function Home() {
    return (
        <>
            <div className="nano-ink-app">

                <HeroSection />
                <AboutSection />
                <ApplicationsSection />
                <CaseStudySection />

            </div>
        </>
    )
}
export default Home