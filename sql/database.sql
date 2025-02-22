create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    password VARCHAR(255)
);

create TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);

-- create TABLE comments(
--     id SERIAL PRIMARY KEY,
--     author VARCHAR(255),
--     content TEXT,
--     link_id INTEGER,
--     FOREIGN KEY (author) REFERENCES person(name)
--     FOREIGN KEY (link_id) REFERENCES post(id)
-- );
-- потом сделаю уже комментарии в том виде, в котором хочу. Это тестовый полигон

create TABLE comments(
    id SERIAL PRIMARY KEY,
    author VARCHAR(255),
    content TEXT,
    link_id INTEGER
);