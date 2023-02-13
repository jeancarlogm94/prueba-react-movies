import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import video from '../../../assets/video-banner.mp4';
import './Video.css';

function Video() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="video col">
            <button className="btn-video" onClick={handleShow}>
                <i className="fa-solid fa-3x fa-play"></i>
            </button>
            <div className="modal-container">
                <Modal closeButton show={show} onHide={handleClose}>
                    <video width="100%" height="auto" loop autoPlay={true}>
                        <source src={video} type="video/mp4" />
                    </video>
                </Modal>
            </div>
        </div>
    );
}

export default Video;
