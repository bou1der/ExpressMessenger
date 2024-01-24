-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 24 2024 г., 13:05
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `cute`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tokenusers`
--

CREATE TABLE `tokenusers` (
  `id` int(64) NOT NULL,
  `refreshToken` varchar(256) NOT NULL,
  `createdAt` varchar(256) NOT NULL,
  `updatedAt` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tokenusers`
--

INSERT INTO `tokenusers` (`id`, `refreshToken`, `createdAt`, `updatedAt`) VALUES
(8, 'dfskljfskdjfksld', '2024-01-21 16:41:08', '2024-01-21 16:41:08'),
(9, 'dfskljfskdjfksld', '2024-01-24 11:52:12', '2024-01-24 11:52:12');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nickname` text NOT NULL,
  `login` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `createdAt` text NOT NULL,
  `updatedAt` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `nickname`, `login`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'boulder', 'boulder', '$2a$15$54RNIaR1F0HwAaI81kwEeutrn8Kcd2TiB0tYA9aw46vhcLKwGetPe', '2024-01-09 11:23:29', '2024-01-09 11:23:29'),
(2, 'boulder', 'boulderTest', '$2a$15$kOP1l4YbtQoLJzRbMBX1oubl5IH4XhgSQm8NHTM8/PQJQzJuKNs7C', '2024-01-13 13:30:23', '2024-01-13 13:30:23'),
(3, 'bouldere11', 'DSADASD11', '$2a$15$ZO9ClTyowiIu6T7RAvE/0OZoxSxdE4Q2KvLhQSFTEaIkm92bsMxYG', '2024-01-17 19:18:42', '2024-01-17 19:18:42'),
(4, 'adasdsdasdasdasdasdasd', 'bouldirrrrrasdasdaasdasd', '$2a$15$jiKyNY6yeGMipIGjdmVN3uCZi99Hp7JilCCaqHtsFV4hOBGDxA/1m', '2024-01-21 15:17:42', '2024-01-21 15:17:42'),
(5, 'asdasdasdasdasd', '2w23232232323', '$2a$15$iwK0kjTo9zz9lH43Eik/B.41/M5RPvsf89lrYm8TQm63iZg.ys7m2', '2024-01-21 16:20:48', '2024-01-21 16:20:48'),
(6, 'asd', 'sa', '$2a$15$1Kxm8BWPPaYbekSK69RjFueUUTWjZb9Tu4gbyAbDV.spXVdkoAfpO', '2024-01-21 16:31:43', '2024-01-21 16:31:43'),
(7, 'asdasdasds', 'saasdasdasdasdasd', '$2a$15$a1wy4LMYlgW5vr4sUwYCS.dN3Zzv49kLc/EuowETarIrDi5jjVnLO', '2024-01-21 16:33:35', '2024-01-21 16:33:35'),
(8, 'asdasdasds1', 'saasdasdasdasdasd1', '$2a$15$a6.CjADrGHYYFO2klkxex.sL8/mNlEHcHVxOj4aMux86L6rE70.Ey', '2024-01-21 16:41:08', '2024-01-21 16:41:08'),
(9, 'Булдырь', 'nir4y', '$2a$15$W6TMhAMNGt2aLxo.dwJPO.oBlju4qV0DNcu5euUPLTC/DjLW0jiYe', '2024-01-24 11:52:12', '2024-01-24 11:52:12');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
