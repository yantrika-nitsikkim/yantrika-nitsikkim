import "./MoreAbout.css";

// Import activity icons
import robotics from "../assets/Robotics.png";
import solidworks from "../assets/solidworks.png";
import discussion from "../assets/discussion.png";
import talksession from "../assets/talksession.png";
import workshop from "../assets/Workshops.png";
import printing from "../assets/printing.png";
import projects from "../assets/Projects.png";
import ansys from "../assets/Ansys.png";
import bgImage from "../assets/MoreAbout.jpg";

const activities = [
  { name: "Robotics", img: robotics },
  { name: "Solid Works", img: solidworks },
  { name: "Group Discussion", img: discussion },
  { name: "Talk Session", img: talksession },
  { name: "Workshops", img: workshop },
  { name: "3D Printing", img: printing },
  { name: "Projects", img: projects },
  { name: "Ansys", img: ansys },
];

const MoreAbout = () => {
  return (
    <section
      className="more-about-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay"></div>

      <div className="more-about-content">
        <h2 className="more-about-title">
          More activities on which we work together:-
        </h2>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>
              <img
                src={activity.img}
                alt={activity.name}
                className="activity-icon"
              />
              <p className="activity-name">{activity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAbout;
