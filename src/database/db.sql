CREATE TABLE restaurants (
            id TEXT PRIMARY KEY, -- Unique Identifier of Restaurant
            rating INTEGER, -- Number between 0 and 4
            name TEXT, -- Name of the restaurant
            site TEXT, -- Url of the restaurant
            email TEXT,
            phone TEXT,
            street TEXT,
            city TEXT,
            state TEXT,
            lat FLOAT, -- Latitude
            lng FLOAT
);

\copy restaurants (id, rating, name, site, email, phone, street, city, state, lat, lng) FROM 'C:/Users/guerr/Downloads/restaurantes.csv' WITH (FORMAT csv, HEADER true, DELIMITER ',', ENCODING 'UTF8');

SELECT COUNT(*) FROM restaurants;
