import React from 'react'
import "../style/Portfolio.css"

export default function Portfolio() {

    let projectlinks = {
        "sentosa": "https://nft.sentosa.com.sg/",
        "cryptobengz": "https://cryptobengz.xyz/"
    }

    let projectDisplay = [];



    for (let client of Object.keys(projectlinks)) {
        projectDisplay.push(
            <div className="project">
                <a href={projectlinks[client]}>
                    <img src={require(`./asset/projects/${client}.png`)} className="project-img" alt="" />
                </a>
                <div className="client">
                    {client}
                </div>
            </div>
        )

    }

    return (
        <div className="portfolio">
            <div className="container">
                <div className="heading gradient">
                    our past projects
                </div>
                <div className="projects">
                    {projectDisplay}
                </div>
            </div>
        </div>
    )
}
