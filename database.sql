CREATE TABLE imagelist(
    "id" SERIAL PRIMARY KEY,
    "path" varChar(80),
    "description" varChar(120),
    "likes" integer
);

INSERT INTO imagelist (path, description, likes)
VALUES 
('images/01.jpg', 'Saffron the day I found her', 0),
('images/02.jpg', 'Post bath treat', 0),
('images/03.jpg', 'Saffron plays derby', 0),
('images/04.jpg', 'Saffron helps with yard work', 0),
('images/05.jpg', 'Saffron sees snow', 0),
('images/06.jpg', 'How dare you!', 0),
('images/07.jpg', 'Wheres my treat?', 0),
('images/08.jpg', 'Pay attention to me!', 0),
('images/09.jpg', 'I deserve treats', 0),
('images/14.jpg', 'I dont know about this new place...', 0),
('images/15.jpg', 'The cat took my bed...', 0),
('images/18.jpg', 'Happy pup', 0)