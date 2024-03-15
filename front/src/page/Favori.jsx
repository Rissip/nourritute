import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Favori() {
  const [favoris, setFavoris] = useState([]);

  useEffect(() => {
    const fetchFavoris = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all');
        setFavoris(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des plats favoris :', error);
      }
    };

    fetchFavoris();
  }, []);

  const removeFromFavorites = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      setFavoris(favoris.filter((favori) => favori.id !== id));
      window.alert('Le plat a été supprimé des favoris avec succès.');
    } catch (error) {
      console.error('Erreur lors de la suppression du plat favori :', error);
    }
  };

  return (
    <div className="meal-list">
      <h2>Plats Favoris</h2>
      <div className="meals">
        {favoris.map((favori) => (
          <div key={favori.id} className="meal-item">
            <img src={favori.img} alt={favori.name} className="meal-image" />
            <div className="meal-details">
              <h3 className="meal-name">{favori.name}</h3>
              <button className="remove-from-favorites" onClick={() => removeFromFavorites(favori.id)}>
                Supprimer des favoris
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favori;
