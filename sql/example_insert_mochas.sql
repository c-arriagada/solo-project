-- must have a restaurant before adding a mocha
INSERT INTO restaurants(id, name, created_at, num_street, city, state, zip_code) VALUES (1,'The Perfect Cup','2023-08-22 19:10:25-07', '4700 N Damen Ave', 'Chicago','IL', 60625);

INSERT INTO restaurants(id, name, created_at, num_street, city, state, zip_code) VALUES (2,'Geraldines','2023-08-31 18:10:25-07', '4743 N Lincoln Ave', 'Chicago','IL', 60625);

INSERT INTO restaurants(id, name, created_at, num_street, city, state, zip_code) VALUES (3,'Cafecito','2023-08-29 17:09:25-07', '215 E Chestnut', 'Chicago','IL', 60611);

INSERT INTO mochas(id, created_at, photo, description, restaurant_id) VALUES (1,'2023-08-22 19:10:25-07', 'abc', 'Great mocha!', 1);

INSERT INTO mochas(created_at, photo, description, restaurant_id) VALUES ('2023-08-22 19:10:25-07', 'abc', 'Great mocha!', 1);

INSERT INTO mochas(photo, description, restaurant_id) VALUES ('abc', 'Perfect mix of chocolate, coffee and sweetness.', 1);

INSERT INTO mochas(photo, description, restaurant_id) VALUES ('abc', 'Not my favorite but still a very decent mocha.', 2);

INSERT INTO mochas(photo, description, restaurant_id) VALUES ('abc', 'Less on the sweet side but still a very nice drink.', 3);

INSERT INTO reviews(rating, comment, mocha_id, created_by) VALUES (5, 'Lovely combo of coffee and chocolate', 9, 'Caheri');

