import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/FloatingContact.css';

function FloatingContact() {
  return (
    <a
      href="https://wa.me/5574999805725"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-contact"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default FloatingContact;
