import React, { useEffect, useState } from "react";
import HeroImage from "../images/heroimage.jfif";
import { API, fetchAllCrewMembers } from "../server/api";

export const Home = () => {
  const [crewMembers, setCrewMembers] = useState<{ image: string, name: string, role: string }[]>([]);

  useEffect(() => {
    fetchAllCrewMembers().then((res) => {
      setCrewMembers(res)
    })
  }, [])
  return (
    <>
      <section className="hero">
        <img src={HeroImage} alt="hero image - smart watch" />
        <div className="hero-content">
          <div className="container">
            <h1>A safe space to speak your heart</h1>
            <p>
              feel free to spell out your guts, speak about your darkest
              thoughts we will help to through it
            </p>
            <button>start a chat</button>
          </div>
        </div>
      </section>

      <section className="best-sellers">
        <h2>Our Crew</h2>
        <hr />
        <div className="product-slider">
          <div className="container">
            {crewMembers.map((curMember) => (
              <div className="product">
                <div className="product-picture">
                  <img src={`${API}/image/${curMember.image}`} alt={curMember.name} />
                </div>
                <div className="product-info">
                  <h5 className="categories">{curMember.name}</h5>
                  <h4 className="title">{curMember.role}</h4>
                  <button>CV</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <h3>Newsletter signup</h3>
        <p>Subscribe now and don't miss a single deal!</p>
        <form>
          <input type="email" name="emil" placeholder="Your email..." />
          <button type="submit">subscribe</button>
        </form>
      </section>
    </>
  );
};
