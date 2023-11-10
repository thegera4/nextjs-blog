---
title: Dockeriza tu aplicación con FastAPI
date: '2023-11-10'
image: docker-and-fastapi.png
excerpt: Aprende como Dockerizar tu apliación hecha con FastAPI para que puedas correrla o desplegarla en cualquier lugar sin problema.
isFeatured: true
---

Recientemente me encuentro practicando Python en conjunto con el framework FastAPI, del cual estoy fascinado por su simpleza y por su generación automática de documentación (solo te preocupas por escribir el código de tu aplicación y el framework te genera la documentación en Swagger!). Por otra parte tambien me encuentro practicando Docker por las grandes ventajas que representa hoy (correr aplicaciones sin tener que instalar nada en tus equipos, facilidades de despliegue en cualquier lugar, etc.).

Importante! Este NO es un curso de Docker completo, simplemente son los primeros pasos o repaso de los pasos básicos para Dockerizar tu aplicación fácil y rápido. Recuerda que para que puedas utilizar Docker y sus comandos en tu computadora, tienes que instalarlo desde su web oficial: [Instalar Docker](https://docs.docker.com/get-docker/).

Para este ejemplo, voy a utilizar una aplicación hecha durante el curso de backend con Python y FastAPI creado por uno de mis mayores influencias en programación: [Brais Moure](https://mouredev.com/). Si te interesa aprender a programar backend con Python, te recomiendo buscar su curso en youtube (aproximadamente de 8 horas, gratis), en el que vas a crear esta misma aplicación que voy a usar a continuación para Dockerizar.

## Paso 1: Crea el archivo Docker (Dockerfile)

Una vez que ya tengas tu aplicación finalizada y Docker instalado en tu computadora, se debe agregar el Dockerfile a nivel raíz de tu proyecto (recuerda que el archivo debe llamarse asi tal cual "Dockerfile"):

![Dockerfile](Dockerfile.png)

## Paso 2: Escribir comandos para Docker dentro del Dockerfile

Una vez que ya tengamos el archivo, procedemos a escribir las instrucciones para que Docker pueda crear la imagen (asi se llama lo que construimos con estos comandos del dockerfile):

```js
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
```

En mi caso, el archivo requirements.txt de mi proyecto se ve asi:

```js
//requirements.txt
fastapi~=0.103.1
uvicorn
python-jose
pydantic~=2.4.1
pydantic_settings
passlib~=1.7.4
pymongo~=3.11.0
python-dotenv~=1.0.0
python-multipart
starlette~=0.27.0
```

## Paso 3: Crear la imagen de Docker

El siguiente paso es construir la imagen de docker. esto lo logramos abriendo la terminal y corriendo el siguiente comando (puede ser la terminal integrada en tu editor de codigo para que ya este posicionada al nivel raiz de tu proyecto):

**docker build -t fastapi-python .**

La explicación sencilla de este comando es: con la instrucción *docker build*, le decimos a nuestro sistema que vamos a crear una nueva imagen de docker, la bandera *-t* significa tag, lo cual es el etiqueta (como un nombre amigable) para identificar nuestra imagen fácilmente, en mi caso yo le llame *fastapi-python* y el punto al final especifica el "contexto de construcción". El contexto de construcción es el conjunto de archivos y directorios que Docker utilizará para construir la imagen. En este caso, el punto representa el directorio actual, lo que significa que Docker utilizará los archivos en el directorio actual como el contexto de construcción.

## Paso 4: Crear el contenedor para correr la app

Si todo sale bien con el comando anterior, se creará la imagen de docker y se almacenará en tu computadora (esta imagen tu la puedes compartir en docker hub para que todo el mundo pueda descargarla, asi como por ejemplo nosotros descargamos la imagen de python 3.11, alguien más la subió y creamos una nueva imagen con base en esa imagen!).

Ahora con base en esta imagen que acabmos de crear, tu puedes crear y correr los contenedores que quieras (bueno los que te permita los recursos de tu computadora). Esto lo haces con el siguiente comando:

**docker run -d --name fastapiexamplecontainer -p 80:80 fastapi-python**

La explicación sencilla de este comando es: con la instrucción *docker run*, le decimos al sistema que vamos a ejecutar un contenedor de docker, la bandera *-d* significa que vamos a correr en "detached mode", osea el contenedor se ejecuta en segundo plano y no bloquea la terminal para su uso, la bandera *--name* es para asignar el nombre al contenedor en mi caso "fastapiexamplecontainer", la bandera *-p* es para mapear los puertos del host y el contenedor, en mi caso el puerto 80 del host (osea mi computadora) se mapea al puerto 80 del contenedor que voy a crear, esto permite que las solicitudes al puerto 80 de mi computadora se dirijan al puerto 80 del contenedor (esto puede variar de acuerdo a los puertos que hayas definido en tu aplicacion, si es que escucha en algun puerto), y finalmente *fastapi-python* es el nombre de la imagen que utilizamos para ejecutar el contenedor.

Una vez que hayas ejecutado este comando, y en mi caso que uso Windows como sistema operativo, puedo revisar visualmente en la aplicación "Docker Desktop" si ya esta corriendo mi contenedor. Docker desktop se instala automáticamente cuando instalas docker en windows (para el caso de otros sistemas operativos a la fecha actual no cuentan con esta aplicación extra, esperemos a futuro si, pero si no, tu puedes correr otro comando para confirmar si el contenedor y la imagen ya existen y estan corriendo..).

![running-container](container-running.png)

En la imagen de arriba, podemos ver que mi contenedor fue creado y esta corriendo actualmente, lo que significa que puedo probar mi aplicación visitando localhost en mi computadora o el path definido en la aplicación, para este caso el localhost:8000 por lo que si en mi navegador me dirigo a esa dirección, puedo ver mi aplicacion corriendo correctamente:

![app-ok](app-ok.png)

Finalmente, en el caso de que no cuentes con Docker Desktop debido a tu sistema operativo, e incluso en windows puedes usar tu terminal y correr los siguientes comandos para revisar y confirmar que tu imagen y tu contenedor fueron creados correctamente:

Para revisar las imagenes creadas/existentes: **docker images**

Para revisar los contenedores creados y su estatus: **docker ps**

Espero que este tutorial te haya servido. Nos vemos en la próxima!
