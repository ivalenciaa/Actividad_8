CREATE TABLE autores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  imagen VARCHAR(255)
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  descripcion TEXT,
  fecha_creacion DATE,
  categoria VARCHAR(100),
  autor_id INT,
  FOREIGN KEY (autor_id) REFERENCES autores(id)
);
