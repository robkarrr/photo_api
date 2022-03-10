-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 10 mars 2022 kl 17:58
-- Serverversion: 5.7.34
-- PHP-version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `photos`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `albums`
--

INSERT INTO `albums` (`id`, `title`, `user_id`) VALUES
(1, 'Confetti Album', 6),
(2, 'Happy Album', 6),
(3, 'not sofunny album', 6),
(4, 'planes', 7),
(5, 'carsss', 6),
(6, 'test', 6),
(7, 'Funny Album', 7),
(8, 'Funny Albumss', 7);

-- --------------------------------------------------------

--
-- Tabellstruktur `albums_photos`
--

CREATE TABLE `albums_photos` (
  `id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `photo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `albums_photos`
--

INSERT INTO `albums_photos` (`id`, `album_id`, `photo_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(17, 3, 1),
(18, 4, 1),
(19, 5, 1),
(20, 6, 1),
(21, 7, 10),
(22, 7, 7);

-- --------------------------------------------------------

--
-- Tabellstruktur `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(512) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `photos`
--

INSERT INTO `photos` (`id`, `title`, `url`, `comment`, `user_id`) VALUES
(1, 'Confetti#1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 1),
(5, 'Confetti#3', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti photo 3', 6),
(6, 'Confetti#3', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti photo 3', 1),
(7, 'blabla', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'blablabla', 7),
(8, 'Confetti#4', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti photo 4', 7),
(9, 'Confetti#5', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti photo 5', 7),
(10, '12313', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', '123132', 7),
(11, 'Confetti#7', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti photo 7', 7),
(12, 'volvo', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'volvo car', 7);

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'robin@gmail.com', '123123', 'Robin', 'Karlsson'),
(2, 'apa@apa.com', '$2b$10$RDQzJalhcBtNYyzhbVZ3.OMjumJiSBM.hDzll/qToZ3aDF2UUI3Sq', 'nikke', 'nyfiken'),
(3, 'robban@osby.com', '$2b$10$r/9hhq6/VftoGbSqIqtYeuk.nf5/iiofzb9IPyt4GvlbtxHc1ASAu', 'nikke', 'nyfiken'),
(4, 'robban123@osby.com', '$2b$10$YfxFIRfDKdXoFU2z.N0F5uTKCu7kTysBRNcgaNCvfHPJgZe2Ixf3i', 'testaren', 'testis'),
(5, 'huggan123@osby.com', '$2b$10$Iv9N1IjfuFA/Qxz8rVs/jO3neeWaIo4ljxKF7n.cAGK2Znl2BsyG.', 'dutestaren', 'dutestis'),
(6, 'malding@osby', '$2b$10$u0oMMqO1wx4HipzAEhZCme8h/c/tRVcTHbK2VHyb8dp9pIGSLoqYm', 'för', 'bannad'),
(7, 'calo@gmail.com', '$2b$10$WrcPtn733EcxfZf41FZinO0MoYqIDkI/y/9DKUFbgbt7aIVAT17g2', 'cal', 'ehh'),
(8, 'huggelito@.com', '$2b$10$l1sGQlgrAdwTwQp06BhP2eeJNy0xJZKc9wZxdhpFZ3if.EgFDOhJ2', 'hug', 'oo'),
(9, 'calo123123@gmail.com', '$2b$10$nyno/8eVKzwvYKqyZfn6KeQbjp9noOdliKSmUwTW4T3vthHgQjH3u', 'tes', 'tare'),
(10, 'test1@gmail.com', '$2b$10$Eu0cccHTJ0Zu/YplpLP1K.2xj.E8aqO.uzVn6SSI3drd6wMAEgvRe', 'tes', 'tare'),
(11, 'test2@gmail.com', '$2b$10$AbnmTUwWZUfCJh8.1bCEOu8xIKq9PXC0lHpQYuiFVdCbc26Z6Qz2K', 'tes', 'tare'),
(12, 'test@mail.com', '$2b$10$eBkalBqwQZudwPvgMu3lPOFjh.cigruZyYZ/nw/shWR3YGszyvCJa', 'tes', 'tare'),
(13, 'testtttt@mail.com', '$2b$10$orHBkD4doyzSZOc5LvNpYuMUT7gWi0qj1ceBzkw/Wpv84abn4LtLK', 'tes', 'tare');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index för tabell `albums_photos`
--
ALTER TABLE `albums_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `album_id` (`album_id`),
  ADD KEY `photo_id` (`photo_id`);

--
-- Index för tabell `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT för tabell `albums_photos`
--
ALTER TABLE `albums_photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT för tabell `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Restriktioner för tabell `albums_photos`
--
ALTER TABLE `albums_photos`
  ADD CONSTRAINT `albums_photos_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`),
  ADD CONSTRAINT `albums_photos_ibfk_2` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`id`);

--
-- Restriktioner för tabell `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
