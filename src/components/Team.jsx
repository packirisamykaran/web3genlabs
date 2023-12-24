import React from 'react'
import "../style/Team.css"
export default function Team() {
    return (
        <div className="team">
            <div className="container">
                <div className="heading gradient">
                    Meet the team
                </div>
                <div className="members">
                    <div className="member">
                        <div className="wrapper">
                            <img src={require("./asset/avu.jpeg")} alt="" className="pic" />
                        </div>
                        <div className="name gradient">Avdhesh</div>
                    </div>
                    <div className="member">
                        <div className="wrapper">
                            <img src={require("./asset/shak.jpeg")} alt="" className="pic" />
                        </div>
                        <div className="name gradient">Shakeel</div>
                    </div>
                    <div className="member">
                        <div className="wrapper">
                            <img src={require("./asset/karan.jpeg")} alt="" className="pic" />
                        </div>
                        <div className="name gradient" > Karan</div>
                    </div>
                </div>
            </div>

        </div >
    )
}
