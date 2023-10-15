import React from "react";
import questsImg from "../../../assets/img/quest.png";
import rewardsImg from "../../../assets/img/star.png";
import amaImg from "../../../assets/img/people.png";
import kingImg from "../../../assets/img/queen.png";
const Sections4 = () => {
    return (
        <div id="Hero4">
            <div className="container">
                <div className="hero4">
                    <div className="hero4--block">
                        <div className="hero4--block__circle"></div>
                        <div className="hero4--block__quests">
                          <div>
                              <h1>quests</h1>
                              <img
                                  className="img"
                                  src={questsImg}
                                  alt="img"
                              />
                          </div>
                            <p>
                                Complete WEB3 quests offered by our partners and earn valuable
                                rewards
                            </p>
                        </div>
                        <div className="hero4--block__rewards">
                          <div>
                              <h1>rewards</h1>
                              <img className="img" src={rewardsImg} alt="img" />
                          </div>
                            <p>
                                Play and earn rewards directly from Fronk World games itself
                            </p>
                        </div>
                        <div className="hero4--block__ama">
                           <div>
                               <h1>AMA</h1>
                               <img className="img" src={amaImg} alt="img" />
                           </div>
                            <p>
                                Attend AMA sessions, both public and private, right within the
                                game
                            </p>
                        </div>
                        <div className="hero4--block__tournaments">
                           <div>
                               <h1>tournaments</h1>
                               <img className="img" src={kingImg} alt="img" />
                           </div>
                            <p>
                                Gear up for gaming tournaments and other web3 events, where you
                                can get exclusive rewards
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sections4;
