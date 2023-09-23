---
title: Cambia el SSD de tu PC por uno nuevo
date: '2023-09-23'
image: change-ssd.png
excerpt: Aprende como cambiar tu SSD por uno nuevo, ya sea que lo quieras cambiar para tener mas espacio, o si tu PC tiene un HDD y lo quieres cambiar por un SSD sin perder tus datos, esta guía, te servirá.
isFeatured: true
---

En este post, quiero compartirles esta guía paso a paso, sobre como cambiar tu disco duro (HDD o SSD), sin perder tus datos ni sistema operativo ni nada, ya que en estos días estuve cambiando varios y aunque ya había hecho este proceso, se me olvidó como hacerlo :P y tuve que volver a investigar, por lo que decidí compartirlo aqui para recordarlo también a futuro.

Primero hablemos de las herramientas que necesitas para este proceso:

## Paso 1: Herramientas requeridas para realizar el proceso

*Disco nuevo* : Simplemente asegurate y confirma que tipo de disco acepta tu PC y compra el adecuado(no explicaré todos los tipos de discos ya que no es el obejtivo de esta guía.).

*Software de clonado de disco* : Existen muchas aplicaciones que nos van a ayudar con nuestro propósito, las cuales puedes encontrar en internet rápidamente, pero para esta guía (y en general) yo recomiendo el software llamado **Macrium Reflect** ya que es super fácil de usar. Lo puedes descargar de esta web: [Macrium](https://www.macrium.com/reflectfree)

![Web Macrium](web-macrium.png)

*Gabinete / carcasa / adaptador NVMe/M.2 a USB* : Si tu PC cuenta con más de 2 puertos para SSD, puedes omitir esta herramienta, pero si solo cuenta con 1, la necesitarás obligatoriamente para poder conectar los 2 discos al mismo tiempo al PC y que puedan leerse por el software de clonado. Estos adaptadores los encuentras en cualquier e-commerce donde vendan componentes de PC o electrónica, por ejemplo Amazon, eBay, MercadoLibre, etc. Dependiendo de la calidad de construcción y velocidades de transferancia, el precio puede variar, pero te recomiendo adquirir el más barato que encuentres ya que el precio ronda entre 10 a 15 USD.

![Adaptador NVMe / M.2 a USB](adaptador.jpg)

## Paso 2: Clonar disco

Una vez que tengamos las herramientas lista, colocamos el disco nuevo (receptor) en el adaptador SSD (o en el puerto libre de tu PC) y lo conectamos al PC.

![Disco nuevo](disco-nuevo.png)

En mi caso, el disco receptor es de 512 GB (el que voy a clonar es de 128 GB, ya le urgía cambiarlo por falta de espacio del almacenamiento :P). El disco receptor era parte de otra PC, por lo cual trae información tanto del sistema operativo como los archivos del usuario que usa el equipo. Con esto les quiero mostrar que el mismo software de clonado nos va a ayudar a no tener que pre-formatear o borrar nada del disco ya que el mismo software hará lo necesario para dejar listo el nuevo disco.

![Informacion en disco](ssd-nuevo-con-info.png)

A continuación, abrimos el software Macrium Reflect, ya instalado, y se nos presentará la siguiente pantalla, en donde podremos ver todos los discos conectados a nuestro equipo y detectados por el software:

![Discos detectados](discos-detectados.png)

Seleccionamos el disco que vamos a clonar, en mi caso el disco 2 y damos click en *'Clonar este disco...'* :

![Clonar disco](clonar-disco.png)

Se nos presenta otra pantalla donde seleccionamos la opción *'Seleccionar un disco receptor'* . Este es el disco hacia el cual pasaremos toda la info y reemplazará a nuestro disco viejo. En mi caso es el disco 3:

![Seleccion disco](seleccion-disco.png)

![Disco receptor](disco-receptor.png)

El software nos devuelve a la pantalla inicial, mostrandonos ya las selecciones que hicimos. El siguiente paso es **muy importante**. Debemos dar click en la opción *'Copiar particiones'* y después seleccionar la opción *'Comprimir o extender para llenar el disco receptor'*. Si por alguna razón, olvidas realizar esta selección y solo das click en siguiente, lo que va a pasar es que no se va a llenar el espacio de tu disco correctamente y vas a ver en windows como si tu disco duro no tuviera el espacio de almacenamiento correcto, si no menos. Este se puede solucionar despues con alguna aplicación que te pueda asignar espacio a particiones, pero para evitar mas pasos innecesarios, esta selección te permite rellenar todo el disco para que no haya problema:

![Extender disco](extender-para-llenar.png)

Una vez que hayamos seleccionado la opción anterior, damos click en siguiente y se nos presentarán varias pantallas: una nos pide si queremos programar la clonación para una fecha / hora futuros, damos click en siguiente, luego una pantalla con el resumen de lo que se va a realizar, damos click en siguiente, y luego una pantalla donde nos avisa que se va a guardar un backup, por si sucede algo en el proceso de clonación, se pueda retomar esta misma configuración y proceso, damos click en ok /siguiente /finish.

En mi caso se presenta otra pantalla extra, ya que comente al principio, mi SSD receptor tiene información almacenada, esta pantalla solo nos avisa que se van a sobre-escribir (borrar) los datos actuales, damos click en el checkbox para confirmar y en continuar:

![Sobreescribir](sobreescribir.png)

Para finalizar, se nos mostrará una pantalla con el porcentaje de progreso del clonado, por lo que solo queda esperar a que finalice el proceso. La velocidad va a variar dependiendo de la cantidad de almacenamiento de los discos y velocidades de transferencia de tus puertos asi como el adaptador que compraste, pero en promedio con discos de 1TB a mi me toma entre 20 y 25 minutos.

## Paso 3: Intercambiar el SSD en la PC

Ya por último, una vez terminado el proceso de clonado, simplemente intercambiamos físicamente el SSD en el equipo y confirmamos que nuestro equipo arranque el sistema operativo sin problemas.

![Cambiar a nuevo ssd](cambiar-ssd-a-nuevo.jpg)

Eso es todo! espero que esta guía te haya servido. Hasta luego!
