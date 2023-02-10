import React from "react";

export default function About() {
  return (
    <div className="About">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-education-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-education"
            type="button"
            role="tab"
            aria-controls="pills-education"
            aria-selected="true"
          >
            Education
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-experience-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-experience"
            type="button"
            role="tab"
            aria-controls="pills-experience"
            aria-selected="false"
          >
            Experience
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-skills-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-skills"
            type="button"
            role="tab"
            aria-controls="pills-skills"
            aria-selected="false"
          >
            Skills
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-education"
          role="tabpanel"
          aria-labelledby="pills-education-tab"
          tabindex="0"
        >
          Education
        </div>
        <div
          className="tab-pane fade"
          id="pills-experience"
          role="tabpanel"
          aria-labelledby="pills-experience-tab"
          tabindex="0"
        >
          Experience
        </div>
        <div
          className="tab-pane fade"
          id="pills-skills"
          role="tabpanel"
          aria-labelledby="pills-skills-tab"
          tabindex="0"
        >
          Skills
        </div>
      </div>
    </div>
  );
}
