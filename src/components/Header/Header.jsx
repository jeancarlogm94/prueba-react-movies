import React, { useState } from 'react';
import video from '../../assets/video-banner.mp4';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import imageVideo from '../../assets/newBanner.jpg';
import './Header.css';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header container">
      <div className="header-info col">
        <h1>Big Comeback</h1>
        <p>
          Nullan porta, eros id aliquam pulvinar, urna ex mattis eros, quis
          vestibulum urna turpis et risus. Mauris porttitor risus faucibis,
          uactor arcu a, tincidunt nibh
        </p>
        <div className="btn-container">
          <Button className="btn-watch">WATCH NOW</Button>
          <Button className="btn-play">+ PLAYLIST</Button>
        </div>
      </div>
      <div className="video col">
        <Button className="btn-video" onClick={handleShow}>
          <i className="fa-solid fa-3x fa-play"></i>
        </Button>
        <div className="modal-container">
          <Modal closeButton show={show} onHide={handleClose}>
            <video width="100%" height="auto" loop autoPlay={true}>
              <source src={video} type="video/mp4" />
            </video>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;
