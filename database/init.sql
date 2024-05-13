USE project;

CREATE TABLE Car
(
id INTEGER AUTO_INCREMENT,
model VARCHAR(255),
year INTEGER,
details TEXT,
PRIMARY KEY (id)
);

INSERT INTO Car(model, year, details) VALUES("Volvo C30", 2009, "Great car");
INSERT INTO Car(model, year, details) VALUES("Mitsubishi Colt", 2012, "Quite good car");
INSERT INTO Car(model, year, details) VALUES("Stiga", 2020, "Not a car");