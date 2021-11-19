drop table if exists asignatura, paralelo, salas
create table asignatura(ecin text primary key,departamento text,sede text,horas int,creditos int, nombre text);
create table paralelo(correlativo serial primary key, nombre text, cuposMax int, inscritos int, ecin text,  foreign key (ecin) references Asignatura(ecin), plataforma text, acta text, calificable text, disp text, titular text, semestre text, materia text); 
create table salas( aforomax int, tipo text, codsala text primary key);

--inserts asignatura


--inserts paralelos