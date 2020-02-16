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
INSERT INTO categories (name) VALUES ('CLÁSICOS'), ('MAKIS'), ('FRITOS'), ('ARGENTOS'), ('ESPECIALES'), ('TABLAS');
COMMIT;
