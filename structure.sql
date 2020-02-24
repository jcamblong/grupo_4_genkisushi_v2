CREATE DATABASE `grupo_4_genkisushi`;
COMMIT;


  
  CREATE TABLE `grupo_4_genkisushi`.`product_types` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `quantity` TINYINT(100) NULL,
  `price` DECIMAL(6,2) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
  
 

CREATE TABLE `grupo_4_genkisushi`.`categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  CREATE TABLE `grupo_4_genkisushi`.`payment_methods` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  CREATE TABLE `grupo_4_genkisushi`.`roles` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  CREATE TABLE `grupo_4_genkisushi`.`cupons` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `detail` VARCHAR(45) NOT NULL,
  `discount` INT NOT NULL,
  `due_date` DATETIME,
  `valid` BOOLEAN DEFAULT 1,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );

  CREATE TABLE `grupo_4_genkisushi`.`order_statuses` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );


CREATE TABLE `grupo_4_genkisushi`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `role_id` INT unsigned NOT NULL DEFAULT 2,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(60) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `street_name` VARCHAR(45) NOT NULL,
  `street_number` VARCHAR(45) NOT NULL,
  `cross_street_name` VARCHAR(45) NULL,
  `neighborhood` VARCHAR(45) NULL,
  `image` VARCHAR(50) NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );

  
  


CREATE TABLE `grupo_4_genkisushi`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `detail` VARCHAR(255) NULL,
  `type_id` INT UNSIGNED NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `image` VARCHAR(50) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`type_id`) REFERENCES `product_types`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));


  
   
  CREATE TABLE `grupo_4_genkisushi`.`orders` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `purchase_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `payment_method_id` INT UNSIGNED NOT NULL,
  `order_status_id` INT UNSIGNED NOT NULL DEFAULT 2,
  `cupon_id` INT UNSIGNED NOT NULL,
  `purchase_total` DECIMAL(6,2),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  FOREIGN KEY (`order_status_id`) REFERENCES `order_statuses`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  FOREIGN KEY (`cupon_id`) REFERENCES `cupons`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  
  CREATE TABLE `grupo_4_genkisushi`.`order_product` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `quantity` INT,
  `purchase_price` DECIMAL(6,2),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
	ON DELETE CASCADE
    ON UPDATE RESTRICT,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) );
  
  commit;