import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi 你好 Hola, welcome to <span className="purple">Star Liu</span>'s page.
            I was born in the Lone Star State and raised in Shanghai, China. 
            Attended highschool at Saint Stephen's Episcopal School (Austin, TX), 
            bachelors at Emory University (Atlanta, GA), 
            and now a masters at Johns Hopkins School of Medicine.
            <br /><br />
            I love hopping around the world, going on adventures, experiencing new cultues, and meeting new folks. 
            I have traveled in Europe, Thailand, Nepal, and other places. Just 2 years ago, my friends and I went on a 
            8-day roadtrip to Mt. Zion, Bryce Canyon, and Rocky Mt. 
            <br /><br />
            Love cooking Chinese food and American food (Steak and such....boring compared to Chinese food). 
            Love working out and lifting weights. I shall use this space to keep track of my progress.
            Weighing at 84kg (185lbs). My PRs are: 270lb benchpress, 335lb deadlift, and 300lb squat.
            <br /><br />
            Fast learner. Motivated researcher and analyst. Breadth of biomedical informatics and data science experience,
            including diabetes, data quality, phenotyping, decision sciences, machine learning, and programming. 
            Please head to <a href="/project"> Projects</a> or <a href="/project"> CV </a> for more.
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
