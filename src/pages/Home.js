import React from "react";
import Navigation from "../components/Navigation";
import "../pages/style/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Navigation />
            <div id="home">
                <section className="wrapper-title">
                    <h1 className="title">PLAY TRADITIONAL GAME</h1>
                    <p className="description">Experience with New Traditional Game</p>
                    <button className="btn btn-warning" onClick={() => navigate("Login")}>Play Now</button>
                </section>
            </div>
        </>
    )
}