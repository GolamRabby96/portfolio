import React from "react";
import "./FloatingWhatsApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingWhatsApp = () => {
	const phoneNumber = "8801624540092";
	const whatsappLink = `https://wa.me/${phoneNumber}`;

	return (
		<a
			href={whatsappLink}
			target="_blank"
			rel="noopener noreferrer"
			className="floating-whatsapp"
			aria-label="Chat on WhatsApp"
		>
			<span className="whatsapp-pulse"></span>
			<FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
		</a>
	);
};

export default FloatingWhatsApp;
