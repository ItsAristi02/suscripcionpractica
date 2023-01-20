-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2023 a las 17:11:18
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clientesgco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `departamento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`, `departamento_id`) VALUES
(1, 'Medellín', 1),
(2, 'Sabaneta', 1),
(3, 'Bogotá', 2),
(4, 'Zipaquirá', 2),
(5, 'Cali', 3),
(6, 'Tuluá', 3),
(7, 'El Ángel', 4),
(8, 'Tulcán', 4),
(9, 'Milagro', 5),
(10, 'Guayaquil', 5),
(11, 'Cayambe', 6),
(12, 'Quito', 6),
(13, 'Archorage', 7),
(14, 'North Pole', 7),
(15, 'Miami', 8),
(16, 'Orlando', 8),
(17, 'Manhattan', 9),
(18, 'Brooklyn', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `departamento` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` varchar(255) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `numero_identificacion` int(11) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `tipo_identificacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `apellidos`, `ciudad`, `departamento`, `direccion`, `fecha_nacimiento`, `marca`, `nombre`, `numero_identificacion`, `pais`, `tipo_identificacion`) VALUES
(1, 'Aristizabal Florez', 'Medellin', 'Antioquia', 'Buenos Aires', '02/02/2003', 'Naf Naf', 'Alejandra', 1000872745, 'Colombia', 'CC'),
(4, 'Aristizabal Galeano', 'Guayaquil', 'Pichincha', 'Las asturias', '2002-10-31', 'G-Star Raw', 'Mia ', 12343454, '', 'Cédula Ciudadania'),
(6, 'Aristizabal Castrillon', 'Manhattan', 'Valle del Cauca', 'Av Palace', '2023-01-31', 'Americanino', 'Oscar Dario', 71731566, '', 'Cédula Extranjera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pais_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`, `pais_id`) VALUES
(1, 'Antioquia', 1),
(2, 'Cundinamarca', 1),
(3, 'Valle del Cauca', 1),
(4, 'Carchi', 2),
(5, 'Guayas', 2),
(6, 'Pichincha', 2),
(7, 'Alaska', 3),
(8, 'Florida', 3),
(9, 'New York', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `identificaciones`
--

CREATE TABLE `identificaciones` (
  `id` int(11) NOT NULL,
  `tipo_identificacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `identificaciones`
--

INSERT INTO `identificaciones` (`id`, `tipo_identificacion`) VALUES
(1, 'Tarjeta Identidad'),
(2, 'Cédula Ciudadania'),
(3, 'Cédula Extranjera'),
(4, 'Pasaporte');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `marca` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `marca`) VALUES
(1, 'Americanino'),
(2, 'American Eagle'),
(3, 'Chevignon'),
(4, 'Esprit'),
(5, 'G-Star Raw'),
(6, 'Naf Naf'),
(7, 'Rifle'),
(8, 'Todo Al 50%');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `nombre`) VALUES
(1, 'Colombia'),
(2, 'Ecuador'),
(3, 'Estados Unidos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4a087507o9j9ksh1tuw7ed4up` (`departamento_id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpmxt507p1yp3ldiweejl35iiy` (`pais_id`);

--
-- Indices de la tabla `identificaciones`
--
ALTER TABLE `identificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `identificaciones`
--
ALTER TABLE `identificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `paises`
--
ALTER TABLE `paises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `FK4a087507o9j9ksh1tuw7ed4up` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`);

--
-- Filtros para la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD CONSTRAINT `FKpmxt507p1yp3ldiweejl35iiy` FOREIGN KEY (`pais_id`) REFERENCES `paises` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
