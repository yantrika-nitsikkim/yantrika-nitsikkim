import Hero from './Hero';
import AboutUs from "../about/AboutUs";
import Join from '../join/join';
import OurTeam from '../ourteam/ourTeam';
import Learning from '../learning/learning';
import Event from '../event_calendar/event_calendar'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Learning />
      <Event />
      <OurTeam />
      <Join />
    </div>
  );
};

export default HomePage;