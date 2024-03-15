const db = require('../../db/db');

async function getAllNouriture() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM favorie', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

async function addNouriture(name, img) {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO favorie (nom, img) VALUES (?, ?)', [name, img], (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  });
}

async function deleteNouriture(id) {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM favorie WHERE id = ?', [id], (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = { getAllNouriture, addNouriture, deleteNouriture };
