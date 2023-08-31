-- must have a restaurant before adding a mocha
INSERT INTO restaurants(id, name, created_at, num_street, city, state, zip_code) VALUES (1,'The Perfect Cup','2023-08-22 19:10:25-07', '4700 N Damen Ave', 'Chicago','IL', 60625);

INSERT INTO mochas(id, created_at, photo, description, restaurant_id) VALUES (1,'2023-08-22 19:10:25-07', 'abc', 'Great mocha!', 1);

INSERT INTO mochas(created_at, photo, description, restaurant_id) VALUES ('2023-08-22 19:10:25-07', 'abc', 'Great mocha!', 1);

INSERT INTO mochas(photo, description, restaurant_id) VALUES ('abc', 'Great mocha!', 1);

INSERT INTO reviews(rating, comment, mocha_id, created_by) VALUES (5, 'Lovely combo of coffee and chocolate', 2, 'Caheri');