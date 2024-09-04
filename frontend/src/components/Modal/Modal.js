import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<button className={styles.closeButton} onClick={onClose}>
					&times;
				</button>
				<div className={styles.content}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
