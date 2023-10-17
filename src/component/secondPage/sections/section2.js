import React from "react";
import cart from "../../../.././src/assets/img/cart.png";

const Section2 = () => {
  return (
    <div id="section2">
      <div className="section2--orange">
        <h1 className="h1-black">road map</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="36"
          viewBox="0 0 60 36"
          fill="none"
          className="orange--outline"
        >
          <path
            d="M42.0046 1L58.9689 17.9643L42.1846 34.7486"
            stroke="#161616"
          />
          <path d="M0 18H59" stroke="#161616" />
        </svg>
        <h1 className="h1-trans">road map</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="36"
          viewBox="0 0 60 36"
          fill="none"
        >
          <path
            d="M42.0046 1L58.9689 17.9643L42.1846 34.7486"
            stroke="#161616"
          />
          <path d="M0 18H59" stroke="#161616" />
        </svg>
        <h1 className="h1-trans">road map</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="36"
          viewBox="0 0 60 36"
          fill="none"
        >
          <path
            d="M42.0046 1L58.9689 17.9643L42.1846 34.7486"
            stroke="#161616"
          />
          <path d="M0 18H59" stroke="#161616" />
        </svg>
      </div>
      <div className="container">
        <div className="section2">
          <div className="section2--lights"></div>
          <div className="section2--blocks">
            <div className="section2--blocks__block">
              <h1>1 quarter 2023</h1>
              <p>
                Mint Genesis NFT, Heroes art concepts, Launch of the community
                program, work on Beta.
              </p>
            </div>
            <div className="section2--blocks__block">
              <h1>2 quarter 2023</h1>
              <p>
                Mint Genesis NFT, Heroes art concepts, Launch of the community
                program, work on Beta.
              </p>
            </div>
            <div className="section2--blocks__block">
              <h1>3 quarter 2023</h1>
              <p>
                Mint Genesis NFT, Heroes art concepts, Launch of the community
                program, work on Beta.
              </p>
            </div>
            <div className="section2--blocks__block">
              <h1>4 quarter 2023</h1>
              <p>
                Mint Genesis NFT, Heroes art concepts, Launch of the community
                program, work on Beta.
              </p>
            </div>
            <div className="section2--blocks__block">
              <h1>1 quarter 2024</h1>
              <p>
                Mint Genesis NFT, Heroes art concepts, Launch of the community
                program, work on Beta.
              </p>
            </div>
            {/* <div className='section2--blocks__none'>
                            <p></p>
                            <p></p>
                        </div> */}
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
