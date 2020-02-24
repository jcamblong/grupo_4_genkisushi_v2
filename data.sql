/*INSERTAR REGISTROS EN ORDER_STATUSES*/
INSERT INTO order_statuses (name) VALUES ('ENTREGADO'), ('PENDIENTE'), ('CANCELADO'), ('EN PREPARACIÓN');
COMMIT;

/*INSERTAR REGISTROS EN PAYMENT_METHODS*/
INSERT INTO payment_methods (type) VALUES ('TARJETA'), ('EFECTIVO'), ('MERCADO PAGO');
COMMIT;

/*INSERTAR REGISTROS EN ROLES*/
INSERT INTO roles (name) VALUES ('ADMIN'), ('OWNER'), ('USER');
COMMIT;

/*INSERTAR REGISTROS EN CATEGORIES*/
INSERT INTO categories (name) VALUES ('CLÁSICOS'),('MAKIS'), ('FRITOS'), ('ARGENTOS'), ('ESPECIALES SIN ARROZ'),('ESPECIALES CON ARROZ'), ('TABLAS'),('ENTRANTES');
COMMIT;

/*INSERTAR CUPONES*/
INSERT INTO cupons (detail, discount, due_date, valid) VALUES ('POR PAGO EN EFECTIVO', 100, '2020/12/31',1);
INSERT INTO cupons (detail, discount, due_date, valid) VALUES ('TAKE AWAY', 100, '2020/12/31',1);
COMMIT;

/*INSERTAR TIPOS DE PRODUCTOS*/
INSERT INTO product_types (name, quantity, price) VALUES ('MAKI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('URAMAKI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('HOSOMAKI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('NIGIRIS', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('SASHIMI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('FUTOMAKI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('TEMAKI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('GUNKAN', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('OSHI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('ONIGIRI', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('ROLLS', 10, 100);
INSERT INTO product_types (name, quantity, price) VALUES ('CALIENTES', 10, 100);


COMMIT;

/* INSERTAR USUARIOS*/
/*CARO*/
INSERT INTO users (first_name, last_name, role_id, email, password, phone, city, street_name, street_number, cross_street_name, neighborhood, image)
VALUES ('MARÍA CAROLINA', 'GUZMÁN RODRÍGUEZ', 1, 'guzmanrodriguez@yahoo.com.ar', sha('Carolina'), 1156454025, 'VICENTE LÓPEZ', 'AVELLANEDA', 1781, 'HIPÓLITO YRIGOYEN', 'FLORIDA','IMG-20191229-WA0105.jpg');
/*CECI*/
INSERT INTO users (first_name, last_name, role_id, email, password, phone, city, street_name, street_number, cross_street_name, neighborhood, image)
VALUES ('CECILIA', 'DENARO', 1, 'ckpd84@gmail.com', sha('Cecilia'), 1156454025, 'VICENTE LÓPEZ', 'AVELLANEDA', 1781, 'HIPÓLITO YRIGOYEN', 'FLORIDA','image-1579089872471.png');
/*JOSE*/
INSERT INTO users (first_name, last_name, role_id, email, password, phone, city, street_name, street_number, cross_street_name, neighborhood, image)
VALUES ('JOSÉ', 'CAMBLONG', 1, 'jcamblong@teco.com.ar', sha('Jose'), 1156454025, 'VICENTE LÓPEZ', 'AVELLANEDA', 1781, 'HIPÓLITO YRIGOYEN', 'FLORIDA','image-1579182441877.png');
/*KENYI*/
INSERT INTO users (first_name, last_name, role_id, email, password, phone, city, street_name, street_number, cross_street_name, neighborhood, image)
VALUES ('KENYI', 'KENYI', 3, 'kenyi@gmail.com', sha('Kenyi'), 1156454025, 'VICENTE LÓPEZ', 'AVELLANEDA', 1781, 'HIPÓLITO YRIGOYEN', 'FLORIDA','image-1581993530720.jpeg');
/*OWNER*/
INSERT INTO users (first_name, last_name, role_id, email, password, phone, city, street_name, street_number, cross_street_name, neighborhood, image)
VALUES ('Dueño', 'Dueño', 2, 'duenio@gmail.com', sha('Dueño'), 1156454025, 'VICENTE LÓPEZ', 'AVELLANEDA', 1781, 'HIPÓLITO YRIGOYEN', 'FLORIDA','image-1579182441877.png');

commit;

/*INSERTAR PRODUCTOS*/
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("New York Phila", "Salmón, Queso, Palta", 11, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Philadelphia", "Philadelphia y Salmón", 11, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Tuna", "Atún, Mayonesa, Queso y Ciboulette", 11, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Buenos Aires", "Langostino, Palta, Queso, cubierto con Salmón", 11, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("California", "Kanikama, Queso, Palta", 2, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Honey", "Salmón cocido, Miel, Jengibre", 11, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Alaska", "Salmón, Queso, Verdeo, Tamago y Salmón Ahumado", 11, 1, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Salmón", "Salmón", 1, 2, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Phila", "Salmón, Queso, Palta", 1, 2, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Kani", "Kanikama, Queso, Palt", 1, 2, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Philafornia", "Salmón, Palta, Queso, Kanikama + Salsa Dulce", 11, 3, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Crispi", "Salmón, Provenzal, Cheddar + Salsa (Sin Arroz)", 11, 3, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Milano", "Mozzarella, Salmón Ahumado Panizado + Salsa de Albahaca", 11, 3, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Criollo", "Bondiola sarteneada con Criolla", 12, 4, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Barbecue", "Bondiola cocida con Cebolla", 12, 4, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Milonga", "Bastones de Milanesa con Vegetales y Queso gratinado", 12, 4, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Libertador", "Pollo Teriyaki y Queso cubierto con Tamago", 12, 4, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Feel", "Salmón, Queso, Verdeo envuelto en Tamago", 11, 5, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Genki", "Palmitos, Salmón envuelto en Tamago y Queso + Praliné", 11, 5, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Tentación", "Relleno de Queso, Palmitps y Salmón, envuelto en Tamago + Salsa de Maracuyá y Batata", 11, 5, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Feel Eby", "Langostinos en tempura, Verdeo, Queso envuelto en Tamago cubierto con Salsa de Mango y Batata", 11, 5, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Futurama", "Langostinos apanados fritos con Queso + Salsa Futurama", 11, 6, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Kunsei", "Langostinos apanados cubierto con Salmón + Guacamole", 11, 6, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Toro Roll", "Langostinos apanados, Palta, Ciboulette", 11, 6, 'demo1-1021605166-1.jpg');
INSERT INTO products (name, detail, type_id, category_id, image) VALUES ("Persia", "Salmón y Mango semi cubierto con Queso y lluvia de Praliné de Almendras", 11, 6, 'demo1-1021605166-1.jpg');
COMMIT;

/*INSERTAR ORDENES Y ORDEN PRODUCTO*/
INSERT INTO orders (user_id, purchase_date, payment_method_id, order_status_id, cupon_id, purchase_total) VALUES (4, current_date(), 2, 2, 1, 400);
COMMIT;
INSERT INTO order_product (order_id, product_id, quantity, purchase_price) VALUES (1, 1, 2, 200);
INSERT INTO order_product (order_id, product_id, quantity, purchase_price) VALUES (1, 2, 3, 300);
COMMIT;





