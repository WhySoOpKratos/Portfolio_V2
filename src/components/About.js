import React from "react";
import clgicon from "./images/colg.svg";

export default function About() {
  return (
    <div className="About">
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-education-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-education"
            type="button"
            role="tab"
            aria-controls="v-pills-education"
            aria-selected="true"
          >
            Education
          </button>
          <button
            className="nav-link"
            id="v-pills-experience-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-experience"
            type="button"
            role="tab"
            aria-controls="v-pills-experience"
            aria-selected="false"
          >
            Experience
          </button>
          <button
            className="nav-link"
            id="v-pills-skills-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-skills"
            type="button"
            role="tab"
            aria-controls="v-pills-skills"
            aria-selected="false"
          >
            Skills
          </button>
        </div>
        <div
          className="tab-content"
          id="v-pills-tabContent"
          style={{
            marginTop: "2%",
          }}
        >
          <div
            className="tab-pane fade show active"
            id="v-pills-education"
            role="tabpanel"
            aria-labelledby="v-pills-education-tab"
            tabindex="0"
            style={{
              marginTop: "2%",
              color: "#313C8E",
              maxWidth: "100%",
              backgroundColor: "white",
              padding: "2vh",
              borderRadius: "1vh",
            }}
          >
            <img
              src={clgicon}
              className="img-fluid"
              alt="React Image"
              style={{ padding: "1vh", width: "50%" }}
            />
            <span>
              <hr className="dropdown-divider" />
              Uttaranchal University Dehradun
              <hr className="dropdown-divider" />
              Course : B.Tech (2018-2022)
              <hr className="dropdown-divider" />
              State: Uttarakhand
              <hr className="dropdown-divider" />
              Branch:CSE
              <hr className="dropdown-divider" />
              CGPA : 8.07
            </span>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-experience"
            role="tabpanel"
            aria-labelledby="v-pills-experience-tab"
            tabindex="0"
          >
            <h1>experience</h1>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-skills"
            role="tabpanel"
            aria-labelledby="v-pills-skills-tab"
            tabindex="0"
          >
            <h1>skills</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="card" style="width: 18rem;">
//   <img src={clgicon} className="card-img-top" alt="..." />
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">
//       Some quick example text to build on the card title and make up
//       the bulk of the card's content.
//     </p>
//   </div>
//   <ul className="list-group list-group-flush">
//     <li className="list-group-item">An item</li>
//     <li className="list-group-item">A second item</li>
//     <li className="list-group-item">A third item</li>
//   </ul>
//   <div className="card-body">
//     <a href="#" className="card-link">
//       Card link
//     </a>
//     <a href="#" className="card-link">
//       Another link
//     </a>
//   </div>
// </div>
