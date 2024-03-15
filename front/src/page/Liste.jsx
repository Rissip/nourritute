import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function List() {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        if (selectedLetter) {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedLetter}`;
        } else if (searchTerm) {
          url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        }
        const response = await axios.get(url);
        if (response.data.meals) {
          setMeals(response.data.meals);
        } else {
          setMeals([]);
        }
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, [searchTerm, selectedLetter]);

  const addToFavorites = async (meal) => {
    try {
      const payload = { name: meal.strMeal, img: meal.strMealThumb };
      await axios.post('http://localhost:3000/add', payload);
      window.alert('Le plat a été ajouté aux favoris avec succès !');
    } catch (error) {
      console.error("Erreur lors de l'ajout aux favoris :", error);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter((prevLetter) => (prevLetter === letter ? '' : letter));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };
  const handleReturn = () => {
    setSelectedMeal(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="meal-list">
      <button onClick={handleScrollToBottom}>Bas</button>
      <h2>Liste des repas</h2>
      <div className="search-container">
        <input type="text" placeholder="Rechercher par nom..." value={searchTerm} onChange={handleSearchChange} className="search-input" />
      </div>
      {selectedMeal ? (
        <div className="selected-meal">
          <h2>{selectedMeal.strMeal}</h2>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="selected-meal-image" />
          <p>{selectedMeal.strInstructions}</p>
          <button onClick={handleReturn}>Retour</button>
        </div>
      ) : (
        <div className="meals">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="meal-item" onClick={() => handleMealClick(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              <div className="meal-details">
                <h3 className="meal-name">{meal.strMeal}</h3>
                <button
                  className="add-to-favorites"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToFavorites(meal);
                  }}
                >
                  Ajouter aux favoris
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <footer className="footer">
        <h3>Rechercher par lettre :</h3>
        <div className="alphabet">
          {Array.from(Array(26), (e, i) => String.fromCharCode(65 + i)).map((letter) => (
            <button key={letter} onClick={() => handleLetterClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
        <div className="scroll-buttons">
          <br />
          <button onClick={handleScrollToTop}>Haut</button>
        </div>
      </footer>
    </div>
  );
}

export default List;
