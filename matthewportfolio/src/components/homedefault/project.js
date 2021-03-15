import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ProjectOne from "../../elements/project/projectOne";


const Project = () => {
    const portfolioData = useStaticQuery(graphql`
        query portfolioDataQuery {
            homedefaultJson(id: {eq: "portfolio"}) {
            title
            description
            }
        }
    `);

    const Title = portfolioData.homedefaultJson.title;
    const Description = portfolioData.homedefaultJson.description;

    return (
        <div className="rn-portfolio-area pt--200 pb--150 bg-color-grey portfolio-style-1">
            <div className="container">
                <div className="row mb--10">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h3 className="title"> 
                                {Title}
                                <span className="bg">Portfolio</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <ProjectOne />
               
               
            </div>
        </div>
    )
}
export default Project
