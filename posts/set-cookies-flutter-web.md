---
title: Guardar cookies en Flutter Web
excerpt: Las cookies nos sirven para guardar información en el navegador y luego poder acceder a ella en el servidor. En este post, te muestro como guardar una cookie por medio de tu app web hecha con Flutter.
image: set-cookies-flutter-web.png
isFeatured: true
date: '2023-03-25'
---

A veces necesitamos guardar información en el navegador del usuario, por ejemplo, si el usuario ya ha iniciado sesión en nuestra aplicación y queremos guardar un token para futuras peticiones al servidor en nombre del usuario loggeado, o si el usuario ha aceptado los términos y condiciones de nuestra aplicación,etc.

Una buena opción que tenemos para guardar esta información en el navegador, es en forma de cookies, las cuales son pequeños archivos de texto que se guardan en el navegador del usuario y que pueden ser accedidos por el servidor.

En este post, te muestro como guardar/setear una cookie en tu app web hecha con Flutter, sin necesidad de instalar un paquete externo adicional y tan con solo 2 sencillos pasos...

## Paso 1: Crear una clase para el manejo de cookies

Creamos una clase para el manejo de cookies (yo la nombré "CookieManager"). Lo primero que agregamos es una variable (yo la nombré "manager") de tipo estático, la cual será la instancia de la clase, y un método estático (yo lo nombre "getInstance") que nos permitirá obtener la instancia de la clase.

```dart
static CookieManager manager = CookieManager.getInstance();

static getInstance() {
  return manager;
}
```

Luego creamos un método para agregar una cookie (yo lo nombré "addCookie"), el cual recibe como parámetros el nombre que queremos darle a la cookie y el valor que va a contener. En este método, usamos la propiedad "document.cookie" para agregar la cookie al navegador del usuario. A esta propiedad le pasamos las características que queremos para nuestra cookie en forma de string y separadas por punto y coma. Para poder acceder a la propiedad "document", debemos importar la librería "dart:html".

```dart
import 'dart:html';
//...
//...
//...
void addCookie(String key, String value) {
  // 2592000 sec = 30 days.
  document.cookie = "$key=$value; max-age=2592000; path=/; SameSite=Lax; Secure";
}
```

También creamos un método para obtener/leer el valor de una cookie (yo lo nombré "getCookie"), el cual recibe como parámetro el nombre de la cookie que queremos obtener/leer. En este método, usamos la propiedad "document.cookie" para obtener las cookies y las guardamos en la variable "cookies". A esta propiedad le pasamos el nombre de la cookie que queremos obtener. Luego, usamos la función "split" para separar las cookies en un array de strings, donde cada string es una cookie. Luego, iteramos sobre el array de cookies y usamos la función "split" para separar el nombre de la cookie del valor de la cookie. Finalmente, retornamos el valor de la cookie que queremos obtener.

```dart
String getCookie(String name) {
    String? cookies = document.cookie;
    List<String> listValues = cookies!.isNotEmpty ? cookies.split(";") : [];
    String matchVal = "";
    for (int i = 0; i < listValues.length; i++) {
      List<String> map = listValues[i].split("=");
      String key = map[0].trim();
      String val = map[1].trim();
      if (name == key) {
        matchVal = val;
        break;
      }
    }
    return matchVal;
  }
```

Por último, creamos un método para eliminar una cookie (yo lo nombré "removeCookie"), el cual recibe como parámetro el nombre de la cookie que queremos eliminar. En este método, usamos la propiedad "document.cookie" para eliminar la cookie del navegador del usuario. A esta propiedad le pasamos el nombre de la cookie que queremos eliminar y las características que queremos para nuestra cookie en forma de string y separadas por punto y coma. En este caso, la forma que elegí para eliminar la cookie, es asignándole un valor vacío en su propiedad "max-age".

```dart
void removeCookie(String name) {
    document.cookie = "$name=; max-age=0; path=/; SameSite=Lax; Secure";
  }
```

Al final, nuestra clase "CookieManager" debería quedar de la siguiente manera:

```dart
import 'dart:html';
//...
//...
//...
class CookieManager {
  static CookieManager manager = CookieManager.getInstance();

  static getInstance() {
    return manager;
  }

  void addCookie(String key, String value) {
    // 2592000 sec = 30 days.
    document.cookie =
        "$key=$value; max-age=2592000; path=/; SameSite=Lax; Secure";
  }

  String getCookie(String name) {
    String? cookies = document.cookie;
    List<String> listValues = cookies!.isNotEmpty ? cookies.split(";") : [];
    String matchVal = "";
    for (int i = 0; i < listValues.length; i++) {
      List<String> map = listValues[i].split("=");
      String key = map[0].trim();
      String val = map[1].trim();
      if (name == key) {
        matchVal = val;
        break;
      }
    }
    return matchVal;
  }

  void removeCookie(String name) {
    document.cookie = "$name=; max-age=0; path=/; SameSite=Lax; Secure";
  }
}
```

## Paso 2: Utilizar la clase y sus métodos en tu código de Flutter

Ahora que ya tenemos nuestra clase para el manejo de cookies, podemos utilizarla en nuestro código de Flutter. En mi caso particular, la utilicé para guardar una cookie que contiene el token de autenticación de mi usuario, luego de que este se loggea en mi aplicación. Para ello, en el método "login" de mi servicio de autenticación, llamo al método "addCookie" de la clase "CookieManager" y le paso como parámetros el nombre de la cookie y el valor de la cookie.

```dart
//...mucho codigo omitido por brevedad...
try {
  //llamo al servicio de autenticación
  var result = await userLogin(email, password);

  //obtengo el mensaje de respuesta del servicio y el token de autenticación
  //y los guardo en variables
  var msg = result['msg'];
  var token = result['token'];

  //uso la clase CookieManager con su método addCookie para guardar la cookie
  //le paso como parámetros el nombre de la cookie 'jwt' y el valor que 
  //quiero que contenga en este caso, el token de autenticación que me 
  //regresa el servicio de autenticación.
  CookieManager().addCookie('jwt', token);

  //Al final, solo mando un mensaje al usuario si la autenticación fue 
  //exitosa y lo mando a la página principal de la aplicación...
} catch (e) {
  //Si la autenticación no fue exitosa, mando mensaje al usuario.
}
//...mucho codigo omitido por brevedad...
```

Al setear la cookie, el navegador del usuario la guarda y la envía en cada petición que haga a mi servidor. Las cookies guardadas en el navegador del usuario, se pueden ver en la pestaña "Application" de la consola de desarrollador del navegador. En la siguiente imágen, se puede ver que la cookie "jwt" que guardé en mi aplicación:

![Cookie 'jwt' que guarda el token](jwt-cookie.PNG)

Listo! Esto es todo lo que hay que hacer para guardar una cookie en el navegador del usuario. Ahora, si quisieramos eliminar la cookie, solo tendríamos que llamar al método "removeCookie" de la clase "CookieManager" y pasarle como parámetro el nombre de la cookie que queremos eliminar. Por ejemplo, si quisiera eliminar la cookie "jwt" que guardé en mi aplicación, solo tendría que llamar al método "removeCookie" de la clase "CookieManager" y pasarle como parámetro "jwt", esto puede ser por ejemplo en el método "logout" para que cuando el usuario cierre sesión, se elimine la cookie que contiene el token de autenticación.

```dart
//...mucho codigo omitido por brevedad...

//al dar click/tap en el botón/icono de cerrar sesión, 
//borrar la cookie "jwt" que guarda el token
onTap:(){
  CookieManager().removeCookie('jwt');
  //...mucho codigo omitido por brevedad...
}
//...mucho codigo omitido por brevedad...
```

## Conclusión

En este tutorial, aprendimos a crear una clase en Dart para el manejo de cookies en Flutter. Esta clase nos permite agregar, obtener y eliminar cookies en el navegador del usuario. Espero que este tutorial les haya sido de utilidad. Si tienen alguna duda o comentario, pueden enviarme un mensaje a través de mi el link de contacto en la parte superior de esta página. Saludos y hasta la próxima!
