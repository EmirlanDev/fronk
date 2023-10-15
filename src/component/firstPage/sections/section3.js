
import React from 'react';
import clothImg1 from "../../../assets/img/shiirt.png"
import clothImg2 from "../../../assets/img/Union.png"
import clothImg3 from "../../../assets/img/cross.png"
import img from "../../../assets/img/img.png"

const Sections3 = () => {
    return (
        <div id="Hero3">
            <div className="container">
                <div className="hero3">
                    <div className="hero3--block">
                        <div className="hero3--block__circle"></div>
                        <div className="hero3--block__content">
                            <div className="hero3--block__content--img">
                                <img src={img} alt="img" />
                            </div>
                            <div className="hero3--block__content--text">
                                <h1>
                                    In Fronk World, you'll have the freedom to personalize your
                                    avatar, letting your unique personality shine through. Get
                                    ready to explore a wide range of NFT skins that enable you to
                                    craft a truly one-of-a-kind character. And guess what? These
                                    skins aren't just for looks. The most daring fronkers can
                                    expect to discover exclusive skins that come with special
                                    abilities. Get ready to unleash your full potential!
                                </h1>
                                <div className="hero3--block__content--text__clothImg">
                                    <img src={clothImg1} alt="img" />
                                    <img src={clothImg2} alt="img" />
                                    <img src={clothImg3} alt="img" />
                                    <img src={clothImg2} alt="img" />
                                    <img src={clothImg1} alt="img" />
                                    <img src={clothImg3} alt="img" />
                                    <img src={clothImg1} alt="img" />
                                    <img src={clothImg2} alt="img" />
                                </div>
                                <div className="hero3--block__content--text__square">
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block2">
                <h2>Things to do in Fronk World</h2>
                <svg
                    className="block2--svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="62"
                    height="40"
                    viewBox="0 0 62 40"
                    fill="none"
                >
                    <path
                        d="M44.9761 3.92871L60.28 22.4048L41.9999 37.5463"
                        stroke="#161616"
                    />
                    <path d="M1.56592 16.927L60.3075 22.4433" stroke="#161616" />
                </svg>
                <h3>Thin</h3>
            </div>
        </div>
    );
};

export default Sections3;