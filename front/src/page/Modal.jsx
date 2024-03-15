import React from 'react';

function Modal({ isOpen, onClose, onConfirm }) {
  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          <p>Êtes-vous sûr de vouloir supprimer ce plat des favoris ?</p>
          <div>
            <button onClick={onClose}>Annuler</button>
            <button onClick={onConfirm}>Confirmer</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
