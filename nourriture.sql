-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 15 mars 2024 à 16:31
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `nourriture`
--

-- --------------------------------------------------------

--
-- Structure de la table `favorie`
--

CREATE TABLE `favorie` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `favorie`
--

INSERT INTO `favorie` (`id`, `nom`, `img`) VALUES
(14, 'Burek', 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg'),
(15, 'Kafteji', 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg'),
(16, 'Poutine', 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg'),
(17, 'Timbits', 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg'),
(18, 'Big Mac', 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg'),
(20, 'Shawarma', 'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg'),
(21, 'Burek', 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg'),
(22, 'Lasagne', 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg'),
(23, 'Pancakes', 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg'),
(24, 'Kedgeree', 'https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `favorie`
--
ALTER TABLE `favorie`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `favorie`
--
ALTER TABLE `favorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
