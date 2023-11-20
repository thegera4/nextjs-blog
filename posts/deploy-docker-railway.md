---
title: Despliega tu aplicación Dockerizada en Railway
date: '2023-11-20'
image: deploy-docker-railway.png
excerpt: Aprende como desplegar tu aplicación Dockerizada gratis, fácil y rápido en Railway!.
isFeatured: true
---

Continuando con los posts relacionados con Docker (ya vimos como dockerizar una aplicación y como utilizar variables de entorno para mantener tus información segura), ahora quiero complementar con un mini tutorial de como desplegar tu aplicación para que pueda ser accedida y utilizada dese cualquier parte del mundo!.

Para lograr esto, utilizaremos el servicio de [Railway](https://railway.app/), el cual es una alternativa de las miles que existen hoy en día, pero la verdad es que a mi me gusta mucho, porque es muy fácil la forma de configurar y hacer despliegues de cualquier tipo de aplicación.

La única consideración que debemos tener es que al momento de crear tu cuenta (como en la mayoria de los servicios conocidos al día de hoy), te piden que introduzcas una tarjeta de crédito válida, pero si logras conseguirla y crear tu cuenta, te puedo comentar que no te van a cobrar por cada proyecto que subas, si no que, y parecido a muchos servicios, te cobran por uso (mientras mas tráfico de uso generes en tu aplicación, te van a ir cobrando un procentaje).

Pero de nueva cuenta, esto no es tan preocupante si tu plan es utilizarlo solo para desplegar proyectos de hobby como por ejemplo para mostrarlos en tu portfolio (asi lo utilizo yo), ya que, los primeros 5 dolares de uso en Railway te los regalan, es decir, si tus proyectos no generan mucho tráfico y son solo de demostración para tu portfolio, no te cobrarán nunca ni 1 dolar. Lo bueno es que Railway nos ofrece un dashboard muy sencillo en el cual podemos monitorear el uso de nuestros proyectos, fijar límites de gastos, dar de baja aplicaciones en caso de que esten generando costos, etc. Por esto y otras ventajas, es que prefiero Railway a muchos otros servicios.

Una vez entendido esto, y teniendo nuestra aplicación lista, veamos los pasos para poder hacer un despliegue en Railway:

## Paso 1: Crea el repositorio de tu imagen Docker en docker hub

Ya habia mencionado en uno de mis post anteriores, que docker hub es el sitio web donde los usuarios pueden publicar sus imagenes de docker para que otros usuarios puedan acceder a ellas (es como si fuera un github pero para imagenes docker). Este es el link para docker hub: <https://hub.docker.com/>

Si no tienes tu cuenta, debes crearla y una vez que hayas iniciado sesión, lo primero que tendremos que hacer es crear un repositorio en docker hub.
Para se esto, vamos al sitio web de docker hub y en la pantalla principal cuando inicias sesión, tendras la opción de crear un nuevo repositorio:

![create-repository](create-repository.png)

En la siguiente pantalla, llena los datos de tu repositorio (nombre y descripción) y da click en "Create":

![repository-info](repository-info.png)

Con esto se crea tu repositorio en docker hub y automáticamente te lleva al sitio web y vista principal de tu repositorio creado (es como el sitio web de tu proyecto en github):

![repository-page](repository-page.png)

## Paso 2: Crea tu imagen Docker con el mismo nombre del repositorio

Una vez que tenemos nuestro repositorio creado, procedemos a crear nuestra imagen con el mismo nombre que tiene nuestro repositorio, para asi ligarlos. Recuerda que tu proyecto, ya debe contar con su archivo Dockerfile para que puedas construir la imagen. En mi caso ya cuento con mi Dockerfile puedo construir mi imagen navegando al terminal que estemos usando y posicionandome en la carpeta raíz de nuestro proyecto (yo utilizo la terminal integrada en mi editor de codigo, en este caso PyCharm). Una vez estando ahí, ejecutamos el siguiente comando:

**docker build -t thegera4/ecommerce-fastapi .**

El cual simplemente es el comando para construir una imagen de docker y con la opción **-t** le asigno el mismo nombre que mi repositorio (thegera4/ecommerce-fastapi). Una vez, terminada la ejecución, podemos confirmar que nuestra imagen se creó correctamente con el comando **docker images** para mostrar el listado de imagenes disponibles o viendo directamente en docker desktop si ya aparece nuestra imagen disponible:

![image-created](image-created.png)

## Paso 3: Agrega tu imagen en el repositorio

Una vez que tenemos nuestro repositorio creado y nuestra imagen disponible con el mismo nombre, ahora podemos publicar/agregar ("pushear") nuestra imagen al repositorio. Esto lo hacemos con el comando:

**docker push thegera4/ecommerce-fastapi**

El cual es el comando utilizado para agregar nuestra imagen hacia el repositorio "thegera4/ecommerce-fastapi" ("thegera4" es mi nombre de usuario en docker hub, el cual se utiliza automáticamente como sufijo en docker hub y "ecommerce-fastapi" es el nombre que yo le puse a mi repositorio cuando lo cree en docker hub). Una vez ejecutado el comando, la terminal nos avisa que se hizo el proceso correctamente.

Otra alternativa es utilizar las opciones en docker desktop, navegando al menu "Images", dando click en el icono de la columna "Actions" de nuestra imagen y seleccionando la opción "Push to Hub". Solo asegurate de haber iniciado sesión de tu cuenta de docker en docker desktop (esto lo puedes revisar en la parte superior derecha)

![docker-desktop-push-to-hub](docker-desktop-push-to-hub.png)

Sin importar la opción que seleccionemos para publicar nuestra imagen en el repositorio, una vez habiendo completado este proceso, podemos ir al sitio web de nuestro repositorio en docker hub y confirmar que ahora ya cuenta con una imagen publicada y disponible para ser usada:

![published-image](published-image.png)


## Paso 4: Crea el proyecto en Railway

Nos dirigimos a la web de railway, y ya habiendo iniciado sesión, en el dashboard principal damos click en crear nuevo proyecto:

![create-project-railway](create-project-railway.png)

En la siguiente pantalla, seleccionamos la opción "Empty Project":

![empty-project](empty-project.png)

Y con eso se crea nuestro proyecto en Railway.

## Paso 5: Agrega la imagen de Docker al proyecto de Railway

Una vez en el área de trabajo del proyecto, damos click en la opción de "Add service" que nos aparece en el centro del dashboard:

![add-service](add-service.png)

Seleccionamos la opción "Docker Image":

![select-image](select-image.png)

Escribimos el nombre de nuestra imagen (en mi caso "thegera4/ecommerce-fastapi") y railway automáticamente detecta la página web donde esta almacenada, incluso si das click en la url que se muestra, puedes navegar a la pagina web de tu repositorio en docker hub para confirmar que sea visible y accesible:

![image](image.png)

Con esto solo nos queda esperar a que railway termine de realizar el despliegue y empezar a usar nuestra aplicación. Solo recuerda que si estas utilizando variables de entorno o alguna otra configuración en tiempo de ejecución para tu proyecto, debes indicarselo a Railway a través del dashboard del proyecto. La verdad es que esto es muy sencillo y por estas razones no lo incluyo en este post, pero si te interesa que haga un post sobre como configurar por ejemplo las variables de entorno en Railway para tu proyecto, me lo puedes hacer saber enviandome un comentario en la sección de contacto :). Espero te haya servido, hasta la próxima!
