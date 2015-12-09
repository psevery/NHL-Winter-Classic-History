drop table if exists penalties;
drop table if exists goals;
drop table if exists refs;
drop table if exists coaches;
drop table if exists goalies;
drop table if exists players;
drop table if exists games;
drop table if exists teams;

create table teams
(
	city varchar(20),
	mascot varchar(20),
	year int,
	primary key(mascot, year)
);
create table games
(
	year int,
	name varchar(20),
	home varchar(20),
	away varchar(20),
	homescore int,
	awayscore int,
	primary key (year, name),
	foreign key (home, year) references teams (mascot, year),
	foreign key (away, year) references teams (mascot, year)
);
create table players 
(
	first varchar(20),
	last varchar(20),
	team varchar(20),
	year int,
	jnumber int,
	icetime time, 
	primary key (jnumber, team, year),
	foreign key (team, year) references teams (mascot, year)
);
create table goalies 
(
	first varchar(20),
	last varchar(20),
	team varchar(20),
	year int,
	jnumber int,
	savepercent int,
	primary key (jnumber, team, year),
	foreign key (team, year) references teams (mascot, year)
);
create table coaches
(
	first varchar(20),
	last varchar(20),
	team varchar(20),
	year int,
	primary key (first, last, team, year),
	foreign key (team, year) references teams (mascot, year)
);
create table refs
(
	first varchar(20),
	last varchar(20),
	year int,
	gamename varchar(20),
	primary key (first, last, year, gamename),
	foreign key (year, gamename) references games (year, name)
);
create table goals
(
	period int,
	time time,
	first varchar(20),
	last varchar(20),
	team varchar(20),
	jnumber int,
	year int,
	primary key (period, time),
	foreign key (team, year) references teams (mascot, year),
	foreign key (jnumber, team, year) references players (jnumber, team, year)
);
create table penalties 
(
	period int,
	type varchar(20),
	time int,
	first varchar(20),
	last varchar(20),
	team varchar(20),
	jnumber int,
	year int,
	primary key (jnumber, period, time),
	foreign key (team, year) references teams (mascot, year)
);

