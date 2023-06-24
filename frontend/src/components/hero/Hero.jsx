import React, { useContext } from 'react';
import discountImg from '../../images/Discount.png';
import atm from '../../images/atm card.png';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import './hero.scss';
import loader from '../../images/loading.gif';
import { TransactionContext } from '../../context/TransactionContext';

const Hero = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !message) return;

    sendTransaction();
  };

  return (
    <div id="Home" className="hero">
      <div className="hero-design">
        <div className="hero-writeup">
          <div className="discount-design bg-discount-gradient">
            <img src={discountImg} alt="discount" />
            <p className="discount-text">
              5% <span>DISCOUNT FOR</span> EVERY NEW <span>ACCOUNT</span>
            </p>
          </div>
          <div className="hero-text">
            <h1>
              Send <span className="text-gradient">Ethereum</span> across the
              world
            </h1>
            <p>
              Our team is committed to providing the best online experience for
              our users with a careful laid out methodology to identify the best
              payment methods most likely to fit your needs. We examine annual
              percentage rates, interest.
            </p>
          </div>
        </div>
        <div className="atm-card">
          <img src={atm} alt="atmcard" />
        </div>
      </div>
      <div className="wallet-width">
        {!currentAccount && (
          <div onClick={connectWallet} className="connect-wallet">
            <IoMdArrowDroprightCircle size={24} />
            <p>Connect wallet</p>
          </div>
        )}
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Address To"
          name="addressTo"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="Amount Eth"
          name="amount"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={(e) => handleChange(e)}
        />
        <div className="line" />
        {isLoading ? (
          <div className="spinner_hero">
            <img src={loader} alt="loading" />
          </div>
        ) : (
          <button type="button" onClick={(e) => handleSubmit(e)}>
            send
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
