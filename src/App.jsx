import "./App.css";
import Hero from "../src/components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import ReadinessSection from "./components/ReadinessSection.jsx";
import WhyUsSection from "./components/WhyUsSection.jsx";
import ComparisonSection from "./components/ComparisonSection.jsx";
import PricingSection from "./components/PricingSection.jsx";
import MeetOurDoctors from "./components/MeetOurDoctors.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CallToAction from "./components/CallToAction.jsx";
import FAQSection from "./components/FAQSection.jsx";
import Footer from "./components/Footer.jsx";
import Steps from "./components/Steps.jsx";
import QuizPage from "./components/QuixPage.jsx";
import QuizResultPage from "./components/QuizResultPage.jsx";
import SuccessRateSection from "./components/SuccessRateSection.jsx";
import BlogSection from "./components/BlogSection.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import { motion, useScroll } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import VideoFeedbackSection from "./components/VideoFeedbackSection.jsx";
import AddictionTestComponent from "./components/AddictionTestComponent.jsx";
import RealStoriesComponent from "./components/RealStoriesComponent.jsx";
import RealStory from "./components/RealStory.jsx";
import PBMTherapySection from "./components/PBMTherapySection.jsx";
import Pcompare from "./components/Pcompare.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import LifecycleComponent from "./components/LifecycleComponent.jsx";
import PBMTherapyComponent from "./components/PBMTherapyComponent.jsx";
import CallToActionBanner from "./components/CallToActionBanner.jsx";
import ThreeStepProcessComponent from "./components/ThreeStepProcessComponent.jsx";
import ContactUsComponent from "./components/ContactUsComponent.jsx";
import OralDiseaseHero from "./components/OralDiseaseHero.jsx";
import Overlapping from "./components/Overlapping.jsx";
import SymptomsTestComponent from "./components/SymptomsTestComponent.jsx";
import FAQPBM from "./components/FAQPBM.jsx";
import TobaccoInducedOralDiseasesTable from "./components/TobaccoInducedOralDiseasesTable.jsx";
import WhyOralScreeningMatters from "./components/WhyOralScreeningMatters.jsx";
import PhotoMedicineBanner from "./components/ PhotoMedicineBanner.jsx";
import OralCancerPreventionComponent from "./components/OralCancerPreventionComponent.jsx";
import PhotoHero from "./components/PhotoHero.jsx";
import PBMTherapyConditions from "./components/PBMTherapyConditions.jsx";
import OralScreeningCampComponent from "./components/OralScreeningCampComponent.jsx";
import HowItWorksComponent from "./components/HowItWorksComponent.jsx";
import OralScreeningInclusions from "./components/OralScreeningInclusions.jsx";
import CampEligibilityComponent from "./components/CampEligibilityComponent.jsx";
import MeetOurDoctorsSc from "./components/MeetOurDoctorsSc.jsx";
import CaseStudyAnimatedComponent from "./components/CaseStudyAnimatedComponent.jsx";
import CaseStudyPatient2Component from "./components/CaseStudyPatient2Component.jsx";
import RealHealingComponent from "./components/RealHealingComponent.jsx";
import EarlyTreatmentCostComponent from "./components/EarlyTreatmentCostComponent.jsx";
import Screening from "./components/Screening.jsx";
import OverlapS from "./components/OverlapS.jsx";
import AppointmentComponent from "./components/AppointmentComponent.jsx";
import DependenceTestIntro from "./components/DependenceTestIntro.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PBMCheckComponent from "./components/PBMCheckComponent.jsx";
import PBMSuccessRateSection from "./components/PBMSuccessRateSection.jsx";
import OralDiseaseSuccessSection from "./components/OralDiseaseSuccessSection.jsx";
import PaymentPage from "./components/PaymentPage.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";

const HomePage = () => (
  <>
    <Hero />
    <ReadinessSection />
    <Steps />
    <WhyUsSection />
    <ComparisonSection />
    <PricingSection />
    <MeetOurDoctors />
    <Testimonials />
    <VideoFeedbackSection />
    <CallToAction />
    <FAQSection />
    <BlogSection />
    <SuccessRateSection />
    <WhatsAppButton />
  </>
);

const OralDiseasePage = () => (
  <>
    <OralDiseaseHero />
    <Overlapping />
    <SuccessStories />
    <PhotoMedicineBanner />
    <TobaccoInducedOralDiseasesTable />
    <CallToActionBanner />
    <WhyOralScreeningMatters />
    <RealStory />
    <LifecycleComponent />

    <CaseStudyAnimatedComponent />
    <CaseStudyPatient2Component />
    <RealStoriesComponent />
    <OralDiseaseSuccessSection />
    {/* <WhatsAppButton /> */}
  </>
);

const OralTreatmentPage = () => (
  <>
    <PhotoHero />
    <PBMTherapyComponent />
    <PBMCheckComponent />
    <HowItWorksComponent />
    <PBMTherapyConditions />
    <RealHealingComponent />
    <Pcompare />
    
    <EarlyTreatmentCostComponent />
    
    <ThreeStepProcessComponent />

    <FAQPBM />
    <PBMSuccessRateSection />
    <WhatsAppButton />
  </>
);

const ScreeningCampPage = () => (
  <>
    <Screening />
    <OverlapS />
    <OralScreeningCampComponent />
    <OralScreeningInclusions />
    <CampEligibilityComponent />
    <Pcompare />
    <MeetOurDoctorsSc />
    <OralCancerPreventionComponent />
    <WhatsAppButton />
  </>
);

function App() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#2A8CE0] transform-gpu z-[9999]"
        style={{ 
          scaleX: scrollYProgress,
          transformOrigin: "0%"
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Main Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/oral-disease" element={<OralDiseasePage />} />
            <Route path="/oral-treatment" element={<OralTreatmentPage />} />
            <Route path="/screening-camp" element={<ScreeningCampPage />} />
            <Route path="/contact" element={<ContactUsComponent />} />
            <Route path="/appoinment" element={<AppointmentComponent />} />
            <Route path="/payments" element={<PaymentPage/>} />
            <Route path="/payment-success" element={<PaymentSuccess/>} />


            {/* Quiz Routes */}
            <Route path="/quiz/:quizId" element={<QuizPage />} />
            <Route path="/quiz/a" element={<AddictionTestComponent />} />
            <Route path="/quizD" element={<DependenceTestIntro />} />
            <Route
              path="/quiz/symptoms-test-001"
              element={<SymptomsTestComponent />}
            />
            <Route path="/quiz-result" element={<QuizResultPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
