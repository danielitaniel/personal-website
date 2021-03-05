import React from "react";
import "../../App.css";
import "./Projects.css";

function Experience() {
  return (
    <div>
      <h1 className="header">Experience</h1>

      <inline className="bold">
        SetSail <inline className="sanmateo_align">San Mateo, CA </inline>
      </inline>
      <br></br>
      <inline className="fullstack">
        Software Engineer/Data Science Winter Intern
        <inline className="setsail_winter">Winter 2021 </inline>
      </inline>
      <ul className="list_format">
        <li>
          Building an end-to-end testing infrastructure for data science
          services
        </li>
        <li>
          Writing tests for asynchronous code using randomly generated mock data
        </li>
        <li>Automating software testing for continuous integration</li>
      </ul>

      <inline className="bold">
        TruTag Technologies{" "}
        <inline className="emeryville_align">Emeryville, CA </inline>
      </inline>
      <br></br>
      <inline className="fullstack">
        Software Engineer Fall Intern
        <inline className="trutag_fall">Fall 2020 </inline>
      </inline>
      <ul className="list_format">
        <li>
          Built the back-end API using Python and PostgreSQL for a patient
          compliance mobile application
        </li>
        <li>
          Implemented the front-end user interface using Vue and Node alongside
          HTML, CSS, and JavaScript to display and query data tables
        </li>
        <li> Helped the company bring in $40M in investments</li>
      </ul>

      <inline className="bold">
        The @ Company <inline className="right_align">San Jose, CA </inline>
      </inline>
      <br></br>
      <inline className="fullstack">
        Full Stack Engineer Summer Intern
        <inline className="at_company_summer">Summer 2020 </inline>
      </inline>
      <ul className="list_format">
        <li>
          Designed, implemented, and launched a fully functional prototype
          end-to-end file sharing application for IOS and Android users using an
          internet protocol designed by The @ Company
        </li>
        <li>Used Firebase as a database and cloud storage platform</li>
        <li>Worked in an Agile environment completing weekly sprints</li>
      </ul>
    </div>
  );
}

export default Experience;
