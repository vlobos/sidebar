DROP DATABASE IF EXISTS sidebar;

CREATE DATABASE sidebar;

USE sidebar;

CREATE TABLE restaurant_info (
  id int NOT NULL AUTO_INCREMENT,
  Restaurant varchar(50) NOT NULL,
  Price_Range varchar(50) NOT NULL,
  Health_Score varchar(2) NOT NULL,
  Mon varchar(20) NOT NULL,
  Tue varchar(20) NOT NULL,
  Wed varchar(20) NOT NULL,
  Thu varchar(20) NOT NULL,
  Fri varchar(20) NOT NULL,
  Sat varchar(20) NOT NULL,
  Sun varchar(20) NOT NULL,
  Takes_Reservations varchar(20) NOT NULL, 
  TakeZout varchar(20) NOT NULL,
  Accepts_Credit_Cards varchar(20) NOT NULL, 
  Accepts_Apple_Pay varchar(20) NOT NULL,
  Good_For varchar(20) NOT NULL,
  Parking varchar(20) NOT NULL,
  Bike_Parking varchar(20) NOT NULL,
  Wheelchair_Accessible varchar(20) NOT NULL,
  Good_For_Kids varchar(20) NOT NULL,
  Good_For_Groups varchar(20) NOT NULL,
  Dogs_Allowed varchar(20) NOT NULL,
  Attire varchar(20) NOT NULL,
  Ambience varchar(20) NOT NULL,
  Noise_Level varchar(20) NOT NULL,
  Alcohol varchar(20) NOT NULL,
  Outdoor_Seating varchar(20) NOT NULL,
  Wifi varchar(20) NOT NULL,
  Has_TV varchar(20) NOT NULL,
  Caters varchar(20) NOT NULL,
  Gender_Neutral_Restrooms varchar(20) NOT NULL,
  Smoking varchar(20) NOT NULL,
  PRIMARY KEY (id)
);


LOAD DATA LOCAL INFILE 'data/sidebardata.csv' INTO TABLE restaurant_info
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'


