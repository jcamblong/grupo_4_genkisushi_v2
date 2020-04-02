-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: grupo_4_genkisushi
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'CLÁSICOS','2020-02-24 17:49:18','2020-02-24 17:49:18'),(2,'MAKIS','2020-02-24 17:49:18','2020-02-24 17:49:18'),(3,'FRITOS','2020-02-24 17:49:18','2020-02-24 17:49:18'),(4,'ARGENTOS','2020-02-24 17:49:18','2020-02-24 17:49:18'),(5,'ESPECIALES SIN ARROZ','2020-02-24 17:49:18','2020-02-24 17:49:18'),(6,'ESPECIALES CON ARROZ','2020-02-24 17:49:18','2020-02-24 17:49:18'),(7,'TABLAS','2020-02-24 17:49:18','2020-02-24 17:49:18'),(8,'ENTRANTES','2020-02-24 17:49:18','2020-02-24 17:49:18');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupons`
--

DROP TABLE IF EXISTS `cupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cupons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `detail` varchar(45) NOT NULL,
  `discount` int(11) NOT NULL,
  `due_date` datetime DEFAULT NULL,
  `valid` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupons`
--

LOCK TABLES `cupons` WRITE;
/*!40000 ALTER TABLE `cupons` DISABLE KEYS */;
INSERT INTO `cupons` VALUES (1,'POR PAGO EN EFECTIVO',100,'2020-12-31 00:00:00',1,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(2,'TAKE AWAY',100,'2020-12-31 00:00:00',1,'2020-02-24 17:49:18','2020-02-24 17:49:18');
/*!40000 ALTER TABLE `cupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `purchase_price` decimal(6,2) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (3,2,38,10,100.00,'2020-04-01 21:26:52','2020-04-01 21:26:52'),(4,3,35,1,1500.00,'2020-04-01 21:27:08','2020-04-01 21:27:08'),(5,4,10,10,800.00,'2020-04-01 21:28:20','2020-04-01 21:28:20');
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_statuses`
--

DROP TABLE IF EXISTS `order_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_statuses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_statuses`
--

LOCK TABLES `order_statuses` WRITE;
/*!40000 ALTER TABLE `order_statuses` DISABLE KEYS */;
INSERT INTO `order_statuses` VALUES (1,'ENTREGADO','2020-02-24 17:49:17','2020-02-24 17:49:17'),(2,'PENDIENTE','2020-02-24 17:49:17','2020-02-24 17:49:17'),(3,'CANCELADO','2020-02-24 17:49:17','2020-02-24 17:49:17'),(4,'EN PREPARACIÓN','2020-02-24 17:49:17','2020-02-24 17:49:17');
/*!40000 ALTER TABLE `order_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `purchase_date` datetime DEFAULT current_timestamp(),
  `payment_method_id` int(10) unsigned NOT NULL,
  `order_status_id` int(10) unsigned NOT NULL DEFAULT 2,
  `cupon_id` int(10) unsigned NOT NULL,
  `purchase_total` decimal(6,2) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `user_id` (`user_id`),
  KEY `payment_method_id` (`payment_method_id`),
  KEY `order_status_id` (`order_status_id`),
  KEY `cupon_id` (`cupon_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`order_status_id`) REFERENCES `order_statuses` (`id`) ON DELETE CASCADE,
  CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`cupon_id`) REFERENCES `cupons` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,10,'2020-04-01 21:26:51',2,1,1,100.00,'2020-04-01 21:26:51','2020-04-01 21:26:51'),(3,10,'2020-04-01 21:27:08',2,1,1,1500.00,'2020-04-01 21:27:08','2020-04-01 21:27:08'),(4,10,'2020-04-01 21:28:20',2,1,1,800.00,'2020-04-01 21:28:20','2020-04-01 21:28:20');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` VALUES (1,'TARJETA','2020-02-24 17:49:18','2020-02-24 17:49:18'),(2,'EFECTIVO','2020-02-24 17:49:18','2020-02-24 17:49:18'),(3,'MERCADO PAGO','2020-02-24 17:49:18','2020-02-24 17:49:18');
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_types`
--

DROP TABLE IF EXISTS `product_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `quantity` tinyint(100) DEFAULT NULL,
  `price` decimal(6,2) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_types`
--

LOCK TABLES `product_types` WRITE;
/*!40000 ALTER TABLE `product_types` DISABLE KEYS */;
INSERT INTO `product_types` VALUES (1,'MAKI',10,800.00,'2020-02-24 17:49:18','2020-04-01 19:11:15'),(2,'URAMAKI',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(3,'HOSOMAKI',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(4,'NIGIRIS',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(5,'SASHIMI',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(6,'FUTOMAKI',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(7,'TEMAKI',10,200.00,'2020-02-24 17:49:18','2020-04-01 19:05:51'),(8,'GUNKAN',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(9,'OSHI',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(10,'ONIGIRI',10,100.00,'2020-02-24 17:49:18','2020-02-24 17:49:18'),(11,'ROLLS',10,100.00,'2020-02-24 17:49:18','2020-04-01 19:06:34'),(12,'CALIENTES',10,100.00,'2020-02-24 17:49:18','2020-04-01 18:55:23'),(13,'TABLAS 1',1,1000.00,'2020-04-01 15:27:52','2020-04-01 15:27:52'),(14,'TABLAS 2',1,1500.00,'2020-04-01 15:27:52','2020-04-01 15:27:52'),(15,'TABLAS 3',1,2000.00,'2020-04-01 15:27:52','2020-04-01 15:27:52');
/*!40000 ALTER TABLE `product_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `type_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `image` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `type_id` (`type_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `product_types` (`id`) ON DELETE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'New York Phila','Salmón, Queso, Palta',1,1,'New York Phila.jpg','2020-02-24 17:49:19','2020-04-01 19:08:59'),(2,'Philadelphia','Philadelphia y Salmón',11,1,'Philadelphia.jpg','2020-02-24 17:49:19','2020-04-01 17:39:55'),(4,'Buenos Aires','Langostino, Palta, Queso, cubierto con Salmón. Especial!',11,6,'Buenos Aires.jpg','2020-02-24 17:49:19','2020-04-01 19:06:34'),(5,'California Change','Kanikama, Queso, Palta y arroz',7,6,'California Change.jpg','2020-02-24 17:49:19','2020-04-01 19:05:51'),(6,'Honey','Salmón cocido, Miel, Jengibre',11,1,'Honey.jpg','2020-02-24 17:49:20','2020-04-01 17:38:25'),(7,'Alaska','Salmón, Queso, Verdeo, Tamago y Salmón Ahumado',11,1,'demo1-1021605166-1.jpg','2020-02-24 17:49:20','2020-02-24 17:49:20'),(8,'Salmón','Salmón',1,2,'Salmón.jpg','2020-02-24 17:49:20','2020-04-01 19:04:11'),(9,'Phila','Salmón, Queso, Palta',1,2,'Phila.jpg','2020-02-24 17:49:20','2020-04-01 19:11:15'),(10,'Kani','Kanikama, Queso, Palt',1,2,'Kani.jpg','2020-02-24 17:49:20','2020-04-01 17:41:36'),(11,'Philafornia','Salmón, Palta, Queso, Kanikama + Salsa Dulce',11,3,'Philafornia.jpg','2020-02-24 17:49:20','2020-04-01 18:49:02'),(12,'Crispi','Salmón, Provenzal, Cheddar + Salsa (Sin Arroz)',11,3,'Crispi.jpg','2020-02-24 17:49:20','2020-04-01 17:42:30'),(13,'Milano','Mozzarella, Salmón Ahumado Panizado + Salsa de Albahaca',11,3,'Milano.jpg','2020-02-24 17:49:20','2020-04-01 17:42:57'),(14,'Criollo','Bondiola sarteneada con Criolla',12,4,'Criollo.jpg','2020-02-24 17:49:20','2020-04-01 18:55:23'),(15,'Barbecue','Bondiola cocida con Cebolla',12,4,'Barbecue.jpg','2020-02-24 17:49:20','2020-04-01 17:43:44'),(16,'Milonga','Bastones de Milanesa con Vegetales y Queso gratinado',12,4,'Milonga.jpg','2020-02-24 17:49:20','2020-04-01 18:50:19'),(17,'Libertador','Pollo Teriyaki y Queso cubierto con Tamago',12,4,'Libertador.jpg','2020-02-24 17:49:20','2020-04-01 17:44:50'),(18,'Feel','Salmón, Queso, Verdeo envuelto en Tamago',11,5,'Feel.jpg','2020-02-24 17:49:20','2020-04-01 17:45:29'),(19,'Genki','Palmitos, Salmón envuelto en Tamago y Queso + Praliné',11,5,'Genki.jpg','2020-02-24 17:49:20','2020-04-01 18:10:14'),(20,'Tentación','Relleno de Queso, Palmitps y Salmón, envuelto en Tamago + Salsa de Maracuyá y Batata',11,5,'Tentación.jpg','2020-02-24 17:49:20','2020-04-01 18:10:59'),(21,'Feel Eby','Langostinos en tempura, Verdeo, Queso envuelto en Tamago cubierto con Salsa de Mango y Batata',11,5,'Feel Eby.png','2020-02-24 17:49:20','2020-04-01 18:58:05'),(22,'Futurama','Langostinos apanados fritos con Queso + Salsa Futurama',11,6,'Futurama.jpg','2020-02-24 17:49:20','2020-04-01 19:02:57'),(23,'Kunsei','Langostinos apanados cubierto con Salmón + Guacamole',11,6,'Kunsei.jpg','2020-02-24 17:49:20','2020-04-01 17:47:55'),(24,'Toro Roll','Langostinos apanados, Palta, Ciboulette',11,6,'Toro Roll.jpg','2020-02-24 17:49:20','2020-04-01 17:48:30'),(25,'Persia','Salmón y Mango semi cubierto con Queso y lluvia de Praliné de Almendras',11,6,'Persia.jpg','2020-02-24 17:49:20','2020-04-01 18:19:53'),(26,'Tuna','Roll de atún',1,1,'Tuna.jpg','2020-03-18 18:21:47','2020-03-18 18:21:47'),(34,'TunaEdit','Roll de extra extra chili',1,1,'TunaEdit.jpg','2020-03-19 15:30:19','2020-03-31 23:37:47'),(35,'Tabla Genki','Tabla especial para dos personas.',14,7,'Tabla Genki.jpg','2020-04-01 18:03:41','2020-04-01 15:28:51'),(36,'Tabla Genki II','Tabla especial con tres variedades.',15,7,'Tabla Genki II.jpg','2020-04-01 18:24:33','2020-04-01 15:28:51'),(37,'Tabla Genki Simple','Tabla simple para una o dos personas.',15,7,'Tabla Genki Simple.jpg','2020-04-01 18:31:16','2020-04-01 18:31:16'),(38,'Wrap frito','Wrap frito caliente relleno de atún y cebolla.',12,8,'Wrap frito.JPG','2020-04-01 18:36:16','2020-04-01 18:36:16');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','2020-02-24 17:49:18','2020-02-24 17:49:18'),(2,'OWNER','2020-02-24 17:49:18','2020-02-24 17:49:18'),(3,'USER','2020-02-24 17:49:18','2020-02-24 17:49:18');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `role_id` int(10) unsigned NOT NULL DEFAULT 2,
  `email` varchar(100) NOT NULL,
  `password` varchar(60) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `street_name` varchar(45) NOT NULL,
  `street_number` varchar(45) NOT NULL,
  `cross_street_name` varchar(45) DEFAULT NULL,
  `neighborhood` varchar(45) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'Dueño','Dueño',2,'duenio@gmail.com','cb067fa0c7dec805daf0bfad510cc921514278ed','1156454025','VICENTE LÓPEZ','AVELLANEDA','1781','HIPÓLITO YRIGOYEN','FLORIDA','image-1579182441877.png','2020-02-24 17:49:19','2020-02-24 17:49:19'),(7,'Cecilia','Denaro',1,'ckpd84@gmail.com','$2b$10$NBfcOWyGC8M2EUvWYQg.BewAztmGIfKJPqvg3ebW.1e0G5cySrakG','1155664433','Monte Grande','Alvarado','5641','Güemes','','ckpd84@gmail.com.jpg','2020-04-01 19:47:57','2020-04-01 16:58:19'),(8,'María Carolina','Guzmán Rodríguez',1,'guzmanrodriguez@yahoo.com.ar','$2b$10$rzk7cCEltilLf7QGOOU2GOlE8BU.jA04485AH45/AuBvbib34j2kW','1156454025','El Jaguel','Avellaneda','1781','Libertad','Florida','guzmanrodriguez@yahoo.com.ar.jpg','2020-04-01 19:52:14','2020-04-01 16:58:19'),(9,'José','Camblong',1,'jcamblong@teco.com.ar','$2b$10$lOiWrhVsE41C4.SFBWWeeeCG99upWBSEB9343GrSRgAtPrnX9y9em','1155664433','Ezeiza','Libertad','333','Rivadavia','','jcamblong@teco.com.ar.jpg','2020-04-01 19:57:12','2020-04-01 16:58:19'),(10,'Thomas','Alabart',3,'thomas.alabart@gmail.com','$2b$10$L/Q6izzrwotgL1UEpADRJueKHYzsXahRSQjXOunZ0On2hoIdS40ii','1155664433','Ezeiza','Avellaneda','1781','Libertad','','thomas.alabart@gmail.com.jpg','2020-04-01 21:25:50','2020-04-02 13:41:24');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-02 13:33:47
