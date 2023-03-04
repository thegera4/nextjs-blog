---
title: Despliega tu app Flutter Web en Vercel
date: '2023-03-03'
image: deploy-flutter-web-vercel.png
excerpt: Con Flutter puedes crear aplicaciones de escritorio, móviles y web en poco tiempo y con el mismo código!. En este post, te diré como desplegar tu app web hecha con Flutter en vercel.
isFeatured: true
---

Flutter cada vez toma más fuerza en el mundo de la programación, y es que con Flutter puedes crear aplicaciones de escritorio, móviles y web en poco tiempo y con el mismo código!.

Pero bueno, si estas aqui es porque ya sabes que es Flutter y quieres saber como desplegar tu app web hecha con Flutter en Vercel, ya que es una de las plataformas más populares para desplegar aplicaciones web, fácil de usar y sin ningún costo.

Entonces, bajo la suposición de que ya tienes tu app hecha con Flutter junto con su respectivo repositorio en Github, y tu cuenta en Vercel, veamos los **2 sencillos** pasos para desplegar tu web!

## Paso 1: Crear un nuevo proyecto en vercel y conectarlo con tu repositorio de Github

Simplemente crea un nuevo proyecto en Vercel y conectalo con tu repositorio de Github como ya lo has hecho en otras ocasiones, en este caso seria el repositorio de la app hecha con flutter que quieres desplegar.

![Crea tu proyecto](paso1.PNG)

## Paso 2: Configurar el proyecto

Como Vercel aún no cuenta con un template para desplegar Flutter, debemos configurar nuestro proyecto en la sección **Build & Output Settings** de la siguiente manera:

**Build command:** *flutter/bin/flutter build web --release*

**Output directory:** *build/web*

**Install command:** *if cd flutter; then git pull && cd .. ; else git clone https://github.com/flutter/flutter.git -b stable; fi && ls && flutter/bin/flutter doctor && flutter/bin/flutter clean && flutter/bin/flutter config --enable-web*

![Configura tu proyecto](paso2.PNG)

..y **LISTO!**, sólo tienes que dar click en el botón de DEPLOY y esperar a que se despliegue tu web!.

## Extra: Explicación de la opción *flutter build --web-renderer*

La opción *--web-renderer* es para especificar el renderizador que se usará para construir la aplicación web. Hay 2 opciones disponibles (3 con la opcion *auto* que se selecciona por default si no se especifica ninguna, pero en realidad la opción *auto* es la misma que html):

* **html:** el renderizador por defecto, que usa el DOM de HTML para renderizar la aplicación web.

* **canvaskit:** un renderizador experimental que usa la biblioteca CanvasKit para renderizar la aplicación web y es más consistente con aplicaciones móvil.

**Cual me recomiendas usar?**

* En este caso como estamos enfocados a web, por ende en navegadores de computadoras de escritorio o laptops, utilizamos *html*, ya que es más rápido y más ligero.

Para más información sobre esta opción, puedes visitar la documentación oficial de [Flutter](https://docs.flutter.dev/development/platform-integration/web/renderers).



