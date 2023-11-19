---
title: Variables de entorno (env) en Docker
date: '2023-11-19'
image: envs-docker-compose.png
excerpt: Aprende como utilizar variables de entorno (env) en tu apliación Dockerizada de forma sencilla!.
isFeatured: true
---

Continuando con los posts relacionados con Docker, quiero compartirles en esta ocasión, una forma sencilla de utilizar variables de entorno en tu aplicación Dockerizada (si no sabes como Dockerizar tu aplicación, checa mi post anterior donde te explico como Dockerizar una aplicación hecha con FastAPI).

Importante! Este NO es un curso de Docker completo, simplemente son los primeros pasos o repaso de los pasos básicos. Recuerda que para que puedas utilizar Docker y sus comandos en tu computadora, tienes que instalarlo desde su web oficial: [Instalar Docker](https://docs.docker.com/get-docker/).

Para este ejemplo, voy a utilizar una aplicación hecha con fast api, la cual es básicamente un api de ejemplo para un e-commerce (web de comercio electrónico), en la cual tenemos varios endpoints CRUD para usuarios y productos. Si te interesa descargarla para revisarla, te dejo el link a mi repo de github (Se agradecen las estrellas): <https://www.github.com/thegera4/ecommerce-api.git>.

Una vez que ya tengamos nuestra aplicación Dockerizada podemos empezar con nuestra estrategia para utilizar variables de entorno, pero antes aqui te dejo una vista al Dockerfile de la aplicación que voy a utilizar en este ejemplo a manera de repaso del Dockerfile:

```js
//Dockerfile

//Con esta primera instruccion se indica la imagen base que se va a utilizar
//o sobre la cual se va a basar nuestro proyecto, en este caso se utiliza la
//imagen de python 3.11 version slim. Esta imagen tiene que esta almacenada en
//docker hub, que es el sitio web donde se almacenan las imagenes de docker.
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11-slim

//Con esta segunda instruccion se indica que queremos copiar todo el contenido
//del directorio actual (.), osea nuestro directorio raiz, hacia el directorio
//(/app) que seria el nombre del directorio de la imagen de docker. En resumen,
//se copia todo el contenido de nuestro proyecto hacia la imagen de docker.
COPY . /app

//Con esta tercera instruccion se indica que debemos instalar todas las
//dependencias que se encuentran en el archivo requirements.txt, que es el
//archivo que contiene listadas las dependencias de nuestro proyecto, es decir
//las librerias que utilizamos en nuestro proyecto como fastapi,uvicorn,etc.
RUN pip install -r requirements.txt

//Con esta cuarta instruccion se indica el comando que utilizamos para arrancar
//nuestra aplicacion, en mi caso al ser una app de FastApi se utiliza el comando
//"uvicorn main:app" para arrancar el servidor. Si tu aplicacion es por ejemplo,
//una aplicacion de node.js, aqui tendrias que cambiarlo por CMD ["npm", "start"]
//o segun sea tu caso, esto lo encuentras en internet facilmente...
//En mi caso le agrego la opcion "--host" y "0.0.0.0", para no tener problemas
//de conexion de ningun tipo y hacer que el conteneor acepte peticiones desde
//cualquier cliente / aplicacion que quiera usar mi api.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
```

## Paso 1: Crea tu archivo .env

Define tus variables de entorno en tu archivo .env, el cual, para este ejemplo, tiene que esta a nivel raiz de tu aplicación. En el caso de mi API las variables de entorno que estoy utilizando son las siguientes :

```js
//.env
EMAIL="tuEmail@email.com"
PASSWORD="tuPassword"
SECRET="Cadena de caracteres hexadecimal 10 digitos"
SERVER_URL="http://localhost:8000"
```

## Paso 2: Crear archivo docker-compose.yaml

Si bien existen varias alternativas para el uso y manejo de variables de entorno, a mi en lo personal, me gusta manejarlo con docker-compose, el cual es una herramienta muy útil en docker para la "orquestación" de contenedores múltiples, es decir, el manejo de varias aplicaciones dockerizadas (corriendo en un contenedor docker) se vuelve muy simple con un simple comando :

**"docker-compose up"** para arrancar todos los contenedores de las aplicaciones definidas en tu archivo docker-compose.yaml (incluso si no tienes la imagen creada en tu equipo, este comando te la crea y lugo te arranca el contenedor!) y **"docker-compose down"** para terminar y eliminar los contenedores una vez que hayamos terminado de utilizar nuestra aplicación (las imagenes si se quedan almacenadas!).

Con este comando, te ahorras los famosos **"docker build + 1000 opciones configurables mas"** por cada imagen de cada aplicación que quieras crear y tambien **"docker run + 1000 opciones configurables mas"**. Es por eso que yo siempre prefiero utilizar docker-compose para ahorrarme escribir cientos o miles de palabras en la terminal por cada aplicacion dockerizada que quiero correr.

Entonces, mi archivo docker-compose.yaml, que tambien se enuentra a nivel raiz de mi aplicación, se ve asi:

```js
//docker-compose.yaml
version: '3'
services:
  ecommerce-fastapi:
    build: .
    env_file:
      - .env
    ports:
      - "8000:8000"
```

La explicación sencilla es: estoy utilizando la version 3 de docker-compose, el cual esta configurado con un solo servicio (aplicación/contenedor) en este caso "ecommerce-fastapi" (este nombre es a tu gusto, asi le llame yo para identificar que es mi aplicación hecha en fastapi para el ecommerce), el cual se crea ("build") a partir del Dockerfile que se encuentra en el directorio actual (en mi caso el Dockerfile tambien esta a nivel raíz, si en tu caso esta a otro nivel, aquí debes hacer la modificación de acuerdo a tu ruta), y este contenedor utiliza un archivo env ("env-file"), en este caso puede ser una lista de varios archivos pero yo solo tengo uno, por lo tanto lo agrego con el nombre del archivo correspondiente y finalmente mapeo ("ports") el puerto 8000 del host (mi pc) a el puerto 8000 del contenedor (mi aplicación escucha en el puerto 8000, por lo que si tu app escucha en otro puerto, debes modificar esta parte).

## Paso 3: Ejecutar comando "docker-compose up"

Una vez que ya tengamos nuestro archivo docker-compose.yaml creado, simplemente ejecutamos el comando **"docker-compose up -d"** (le agrego la opcion **-d** para que no me bloquee la misma terminal, ya que el proceso queda corriendo en nuestro equipo, pero no es obligatorio), y listo, en mi caso podemos ver que no me crea la imagen (porque ya la tenia creada, pero si me crea el contenedor y lo ejecuta automaticamente):

![docker-compose](docker-composeup.png)

![container-running](container-running.png)

Con estos sencillos pasos, ya tienes tu(s) contenedores corriendo y utilizando variables de entorno para que tu información este segura! (solo asegurate de no hacer commit de tus archivos .env a tus repositorios...). Espero te haya servido, hasta la próxima!
