import React, { useState } from 'react';
import './navbar.scss';
import close from '../../images/close.svg';
import open from '../../images/menu.svg';
import { navLinks } from '../../constants';
import Modal from '../modal/Modal';

const LINKS = [
  {
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'Market',
  },
  {
    id: 3,
    name: 'About',
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
    setToggle(false);
    document.body.style.overflowY = 'hidden';
  };

  const handleFullModal = () => {
    setModal((prev) => !prev);
    document.body.style.overflowY = 'hidden';
  };
  return (
    <>
      <div className="nav-container box-width">
        <div className="logo">ereumX</div>
        <div>
          <div className="nav-links">
            {LINKS.map((link) => (
              <a href={`#${link.name}`} key={link.id}>
                {link.name}
              </a>
            ))}
            <p onClick={() => handleFullModal()}>Transactions</p>
            <p className="wallet">Login</p>
          </div>
          <div>
            <img
              src={toggle ? close : open}
              alt="menu"
              className="menu-img"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
        </div>
        <div className={`${toggle ? 'sidebar' : 'hidden'} bg-black-gradient`}>
          <ul>
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a href={`#${nav.title}`}>{nav.title}</a>
              </li>
            ))}
            <p onClick={() => handleModal()}>Transactions</p>
          </ul>
        </div>
      </div>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default Navbar;
