import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import lines from "../../../assets/img/lineses.png";
import box from "../../../assets/img/Box.png";
import { HiArrowLongRight } from "react-icons/hi2";
const Sections1 = () => {
  return (
    <div id="Hero">
      <div className="container">
        <div className="hero">
          <div className="hero--block">
            <div className="hero--block__circle"></div>
            <div className="hero--block__content">
              <div className="hero--block__content--block1">
                <h1>The first</h1>
                <div className="hero--block__content--block1__second">
                  <img
                    className="hero--block__content--block1__second--imgLines"
                    src={lines}
                    alt="img"
                  />
                  <h2>social</h2>
                </div>
              </div>
              <div className="hero--block__content--block2">
                <div className="hero--block__content--block2__third">
                  <h2>gaming</h2>
                  <img
                    className="hero--block__content--block2__third--imgBox"
                    src={box}
                    alt="img"
                  />
                </div>
                <h1>platform</h1>
              </div>
            </div>
          </div>
          <h3>Play, complete web3 quests, and receive rewards</h3>
        </div>
      </div>
      <div className="container--whatIs">
        <h4> What is Fronk World</h4>
        <p>{<HiArrowLongRight />}</p>
        <h5> What is Fro</h5>
      </div>
    </div>
  );
};

export default Sections1;
