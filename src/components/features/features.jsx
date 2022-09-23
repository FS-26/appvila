import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faLock,
  faRotate,
  faShield,
  faGear,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import "./features.style.css";
import { Component } from "react";
import { Card } from "../card/card.jsx";

export class Features extends Component {
  render() {
    return (
      <main>
        <div className="flexDiv">
          <h3>FEATURES</h3>
          <h2>Your Experience Gets Better And Better Over Time</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nam,
            minima quasi amet sint alias officia sit deleniti vitae, accusantium
            debitis optio error provident a tenetur sunt voluptates maxime
            cupiditate!
          </p>
        </div>

        <div id="cards">
          <Card titre="Push to Deploy" icone={faCloudArrowUp}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam
            placeat non veniam debitis quisquam rerum ex ipsa! Quod suscipit
            porro magnam saepe ipsam doloremque necessitatibus mollitia nostrum
            consequatur maiores.
          </Card>
          <Card titre="SSL Certificates" icone={faLock}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quod.
          </Card>
          <Card titre="Simple Queues" icone={faRotate}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quod.
          </Card>
          <Card titre="Advanced Security" icone={faShield}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quia libero aliquam quis qui distinctio incidunt totam, eum quasi
            enim, cum blanditiis vel, molestiae sed magnam. Cupiditate
            necessitatibus et obcaecati!
          </Card>
          <Card titre="Powerful API" icone={faGear}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quod.
          </Card>
          <Card titre="Database Backups" icone={faDatabase}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            dolorem saepe nesciunt nam distinctio iure! Similique minus animi
            officiis, accusantium voluptatem dolore repellendus assumenda quasi,
            totam, quas voluptatum culpa eius?.
          </Card>
        </div>
      </main>
    );
  }
}
