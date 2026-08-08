CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INTEGER
);

INSERT INTO products
(name, price)
VALUES
('Laptop', 55000),
('Mobile', 25000),
('Keyboard', 3000),
('Mouse', 1200),
('Monitor', 15000),
('Headphones', 2500),
('Webcam', 4500),
('Printer', 12000),
('Tablet', 18000),
('USB Cable', 500);