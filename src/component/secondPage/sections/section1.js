import React from 'react';
import {FiArrowUpRight} from "react-icons/fi";
import img from "../../../assets/img/Card_pass_1к 1.png"

const Section1 = () => {
    return (
   
        <div id="mint">
            <div className="first">
                <div className="container">
                    <div className="first--title">
                        <div className="first--title__circle">

                        </div>
                        <div className="first--title__one">
                            <h1>Mint <span>Fronk</span></h1>
                            <div className="first--title__one--square">
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                        <div className="first--title__two">
                            <div className="first--title__two--line">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h1>Ticket NFT</h1>
                        </div>
                        <div className="first--title__three">
                            <h2>and start your journey</h2>
                            <div className="first--title__three--arrow">
                                <p></p>
                                <p></p>
                            </div>
                            <div className="first--title__three--line">
                                <h3>Join the mint list</h3>
                                <FiArrowUpRight className="icon"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="second">
                <div className="second--line">

                </div>
              <div className="container">
                <div className="second--page">
                  <div className="second--page__left">
                      <h1>Fronk <br/>Ticket <br/> NFT</h1>
                      <img src={img} alt=""/>
                  </div>
                    <div className="second--page__title">
                        <p>The Fronk Ticket is your gateway to Fronk World. As proud owners of this NFT, you gain access to all public events, the exciting opportunity to attend partner-hosted AMAs, and a plethora of rewards both in and out of the game. Consider this your exclusive pass to Fronkopolis, a gated community buzzing with top-tier events and enticing rewards.</p>
                        <div className="second--page__title--morthe">
                            <div className="second--page__title--morthe__first"></div>
                            <div className="second--page__title--morthe__second"></div>
                            <div className="second--page__title--morthe__third"></div>
                            <div className="second--page__title--morthe__fourth"></div>
                            <div className="second--page__title--morthe__first"></div>
                            <div className="second--page__title--morthe__second"></div>
                            <div className="second--page__title--morthe__third"></div>
                            <div className="second--page__title--morthe__fourth"></div>
                            <div className="second--page__title--morthe__first"></div>
                            <div className="second--page__title--morthe__second"></div>
                            <div className="second--page__title--morthe__third"></div>
                            <div className="second--page__title--morthe__fourth"></div>
                        </div>
                        <div className="second--page__title--text">
                            <h3> Fronk Ticket NFT</h3>
                            <h3> Fronk Ticket NFT</h3>
                            <h3> Fronk Ticke</h3>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Section1;