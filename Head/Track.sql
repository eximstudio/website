CREATE TABLE track (
    id int NOT NULL AUTO_INCREMENT,
    ip varchar(50) NOT NULL,
    page varchar(50) NOT NULL,
    lon varchar(50) NOT NULL,
    lat varchar(50) NOT NULL,
    country varchar(20) NOT NULL,
    ctime DATETIME NOT NULL,
    PRIMARY KEY (id)
);
