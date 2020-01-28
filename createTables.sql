CREATE TABLE `grupo_4_genkisushi`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `detail` VARCHAR(255) NULL,
  `type_id` INT NULL,
  `category_id` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
  
  CREATE TABLE `grupo_4_genkisushi`.`product_types` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `quantity` TINYINT(100) NULL,
  `price` DECIMAL(6,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
  
  CREATE TABLE `grupo_4_genkisushi`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `role_id` INT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(60) NULL,
  `phone` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `street_name` VARCHAR(45) NULL,
  `street_number` VARCHAR(45) NULL,
  `street2` VARCHAR(45) NULL,
  `neighborhood` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );

CREATE TABLE `grupo_4_genkisushi`.`categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  CREATE TABLE `grupo_4_genkisushi`.`payment_methods` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  CREATE TABLE `grupo_4_genkisushi`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  CREATE TABLE `grupo_4_genkisushi`.`orders` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_number` INT NOT NULL,
  `user_id` INT NULL,
  `product_id` INT NOT NULL,
  `date` DATETIME NULL,
  `payment_method_id` INT NULL,
  `order_status` VARCHAR(45) NULL COMMENT 'Entregado, Pendiente, Cancelado, En preparacion',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );

ALTER TABLE `grupo_4_genkisushi`.`orders` 
ADD CONSTRAINT `usuario_fk`
  FOREIGN KEY (`id`)
  REFERENCES `grupo_4_genkisushi`.`users` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `producto_fk`
  FOREIGN KEY (`id`)
  REFERENCES `grupo_4_genkisushi`.`products` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `payment_method_fk`
  FOREIGN KEY (`id`)
  REFERENCES `grupo_4_genkisushi`.`payment_methods` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  ALTER TABLE `grupo_4_genkisushi`.`products` 
ADD CONSTRAINT `type_fk`
  FOREIGN KEY (`id`)
  REFERENCES `grupo_4_genkisushi`.`product_types` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `category_fk`
  FOREIGN KEY (`id`)
  REFERENCES `grupo_4_genkisushi`.`categories` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `grupo_4_genkisushi`.`users` 
ADD CONSTRAINT `role_fk`
  FOREIGN KEY (`id`)
  REFERENCES `grupo_4_genkisushi`.`roles` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

