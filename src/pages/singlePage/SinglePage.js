import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Greeting from "../../containers/greeting/Greeting";

// Education
import EducationsContainer from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "../education/EducationImg";
import { competitiveSites, certifications } from "../../portfolio";
import "../education/EducationComponent.css";

// Experience
import ExperienceImg from "../experience/ExperienceImg";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { experiences } from "../../portfolio";
import "../experience/Experience.css";

// Projects
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import ProjectsImg from "../projects/ProjectsImg";
import {
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio";
import ProjectsData from "../../shared/opensource/projects.json";
import "../projects/Projects.css";

// Contact
import SocialMedia from "../../components/socialMedia/SocialMedia";
import AddressImg from "../contact/AddressImg";
import { contactPageData } from "../../portfolio";
import "../contact/ContactComponent.css";

import { Fade } from "react-reveal";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class SinglePage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={theme} />

        {/* Home */}
        <section id="home">
          <Greeting theme={theme} />
        </section>

        {/* Education */}
        <section id="education">
          <div className="education-main">
            <div className="basic-education">
              <Fade bottom duration={2000} distance="40px">
                <div className="heading-div">
                  <div className="heading-img-div">
                    <EducationImg theme={theme} />
                  </div>
                  <div className="heading-text-div">
                    <h1 className="heading-text" style={{ color: theme.text }}>
                      Education
                    </h1>
                    <h3
                      className="heading-sub-text"
                      style={{ color: theme.text }}
                    >
                      Basic Qualification and Certifications
                    </h3>
                    <CompetitiveSites
                      logos={competitiveSites.competitiveSites}
                    />
                  </div>
                </div>
              </Fade>
              <EducationsContainer theme={theme} />
              {certifications.certifications.length > 0 ? (
                <Certifications theme={theme} />
              ) : null}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <div className="education-main">
            <div className="basic-education">
              <Fade bottom duration={2000} distance="40px">
                <div className="heading-div">
                  <div className="heading-img-div">
                    <ExperienceImg theme={theme} />
                  </div>
                  <div className="heading-text-div">
                    <h1 className="heading-text" style={{ color: theme.text }}>
                      Experience
                    </h1>
                  </div>
                </div>
              </Fade>
              <div className="main">
                <div className="educations-body-div">
                  {experiences.experience.map((degree, i) => (
                    <DegreeCard key={i} degree={degree} theme={theme} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <div className="projects-main">
            <div className="basic-projects">
              <Fade bottom duration={2000} distance="40px">
                <div className="projects-heading-div">
                  <div className="projects-heading-img-div">
                    <ProjectsImg theme={theme} />
                  </div>
                  <div className="projects-heading-text-div">
                    <h1
                      className="projects-heading-text"
                      style={{ color: theme.text }}
                    >
                      {projectsHeader.title}
                    </h1>
                    <p
                      className="projects-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {projectsHeader["description"]}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="repo-cards-div-main">
              {ProjectsData.data.map((repo, i) => (
                <GithubRepoCard key={i} repo={repo} theme={theme} />
              ))}
            </div>
            {publications.data.length > 0 ? (
              <>
                <div className="basic-projects">
                  <Fade bottom duration={2000} distance="40px">
                    <div className="publications-heading-div">
                      <div className="publications-heading-text-div">
                        <h1
                          className="publications-heading-text"
                          style={{ color: theme.text }}
                        >
                          {publicationsHeader.title}
                        </h1>
                        <p
                          className="projects-header-detail-text subTitle"
                          style={{ color: theme.secondaryText }}
                        >
                          {publicationsHeader["description"]}
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
                <div className="repo-cards-div-main">
                  {publications.data.map((pub, i) => (
                    <PublicationCard key={i} pub={pub} theme={theme} />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="contact-main">
            <div className="basic-contact">
              <Fade bottom duration={1000} distance="40px">
                <div className="contact-heading-div">
                  <div className="contact-heading-text-div">
                    <h1
                      className="contact-heading-text"
                      style={{ color: theme.text }}
                    >
                      {ContactData["title"]}
                    </h1>
                    <p
                      className="contact-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {ContactData["description"]}
                    </p>
                    <SocialMedia theme={theme} />
                  </div>
                </div>
              </Fade>
              <Fade bottom duration={1000} distance="40px">
                <div className="address-heading-div">
                  <div className="contact-heading-img-div">
                    <AddressImg theme={theme} />
                  </div>
                  <div className="address-heading-text-div">
                    <h1
                      className="address-heading-text"
                      style={{ color: theme.text }}
                    >
                      {addressSection["title"]}
                    </h1>
                    <p
                      className="contact-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {addressSection["subtitle"]}
                    </p>
                    <h1
                      className="address-heading-text"
                      style={{ color: theme.text }}
                    >
                      {phoneSection["title"]}
                    </h1>
                    <p
                      className="contact-header-detail-text subTitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {phoneSection["subtitle"]}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default SinglePage;
