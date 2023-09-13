CREATE DATABASE post;

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP,
    body TEXT
);