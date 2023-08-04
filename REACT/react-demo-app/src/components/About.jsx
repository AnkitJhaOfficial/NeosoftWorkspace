import React from "react";
import NavBar from "./NavBar";
import DbAdminNavBar from './DbAdminNavBar'
import "../styles/About.css"
import AboutImage from "../assets/logo.png"

export default function About() {
    return (
        <div>
            <DbAdminNavBar />

            <div className="content">

                <div className="outerBox">
                    <div className="images">
                        <img src={AboutImage} />
                    </div>
                </div>
                <div className="outerBox">
                    <div className="rightBox">
                    <div className="ItemsInRight">
                        <h1>About DBAdmin</h1>
                        <h2>
                            WHO WE ARE
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nulla sed, magni voluptas corporis temporibus quam assumenda natus nesciunt aliquam itaque, explicabo voluptatem nam dolore maxime omnis ipsum hic veniam.</p>

                        <h3>
                            WE'RE DIFFERENT THAN THE REST
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis eos quia eligendi nulla temporibus? Fuga aperiam commodi unde nostrum eos ab ipsa vitae et. Quidem ipsa iste doloremque. Amet?</p>
                    </div>
                </div>
                    </div>

                {/* <div className="images">
                    <img src={AboutImage}/>
                </div>
                <div className="ItemsInRight">
                    <h1>About DBAdmin</h1>
                    <h2>
                        WHO WE ARE
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nulla sed, magni voluptas corporis temporibus quam assumenda natus nesciunt aliquam itaque, explicabo voluptatem nam dolore maxime omnis ipsum hic veniam.</p>

                    <h3>
                        WE'RE DIFFERENT THAN THE REST
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis eos quia eligendi nulla temporibus? Fuga aperiam commodi unde nostrum eos ab ipsa vitae et. Quidem ipsa iste doloremque. Amet?</p>
                </div> */}
            </div>
        </div>
    );
}
