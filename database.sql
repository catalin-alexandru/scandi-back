CREATE DATABASE scandiweb;

CREATE TABLE scandi(
	scandi_id SERIAL PRIMARY KEY,
	sku VARCHAR(255),
	name VARCHAR(255),
	price VARCHAR(255),
	type VARCHAR(255)
);