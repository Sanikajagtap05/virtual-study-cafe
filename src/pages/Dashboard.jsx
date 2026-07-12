import {
  FaClock,
  FaTasks,
  FaFire,
  FaBook
} from "react-icons/fa";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StateCard";
import GoalCard from "../components/dashboard/GoalCard";
import QuoteCard from "../components/dashboard/QuoteCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import PomodoroWidget from "../components/dashboard/PomodoroWidget";

function Dashboard() {
  return (
    <div className="container-fluid">

      <WelcomeCard />

      <div className="row">

        <StatsCard
          title="Study Hours"
          value="12"
          color="#FF8A65"
          icon={<FaClock />}
          link="/analytics"
        />

        <StatsCard
          title="Completed Tasks"
          value="24"
          color="#42A5F5"
          icon={<FaTasks />}
          link="/tasks"
        />

        <StatsCard
          title="Current Streak"
          value="7"
          color="#66BB6A"
          icon={<FaFire />}
          link="/analytics"
        />

        <StatsCard
          title="Notes"
          value="15"
          color="#AB47BC"
          icon={<FaBook />}
          link="/notes"
        />

      </div>

      <div className="row mt-2">

        <div className="col-lg-4 mb-4">
          <GoalCard />
        </div>

        <div className="col-lg-4 mb-4">
          <PomodoroWidget />
        </div>

        <div className="col-lg-4 mb-4">
          <QuoteCard />
        </div>

      </div>

      <ProgressCard />

    </div>
  );
}

export default Dashboard;