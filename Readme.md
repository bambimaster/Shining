<!---- SHINing Starter Guide ----->

<h1 align="center">
  ¡Hola!, esta es la guia de inicio para SHINing World/solo albums Gatsby ver.
</h1>

Este es solo un pequeño proyecto en el cual se muestran solo los albums de la pagina llamada "SHINing world", tomando en base lo que lleva en progreso esta pagina dedicada al grupo Surcoreano SHINee.

Te gustaria ver el progreso de dicha pagina para darte una idea en lo que se esta trabajando, entra a "https://www.shiningworld.xyz/grupal-albums"


#Inicios "¿Quien dijo que todo era tan sencillo como parecia?"

Basado en la aplicacion web a base de JS "Gatsby" y en el Content Management System "Drupal" inicia esta pequeña aventura. 

Inicialmente para poder comenzar se requirio el contenido del Drupal de "SHINing World" y crear un proyecto en blanco con "Gatsby"

*Colocando a nuestro Drupal para poderlo usar, el sitio donde viven los datos*

- Descargamos el sitio desde el repo hermano de este ""
- Dependiendo de donde desees que vaya, ya sea que este solo en un servidor o este compartiendo en un Virtual Host(Apache)/Server Blocks (Nginx) es necesario que este corriendo 
- Regeneramos los datos en MYSQL/MariaDB (Se recomienda mas MYSQL) **Nota: Siempre al regenerar los datos se obtiene un error en cuestion de tamaño, no te asustes, simplemente cambia la configuracion de tu servidor y de la base de datos, que no te espante ese feo "UpStreaming send big header"**
- Al ya tener el sitio correctamente corriendo podemos iniciar con adecuar nuestro entorno para Gastby

*Preparando nuestro entorno para nuestro Gatsby en el caso que sea tu primera vez usandolo*
 
 **En el caso de que no sea tu primera vez con NodeJs y/o Git puedes omitir este paso^^**

- Para poder instalar este programa debes saber que tipo de *Sistema Operativo* utilizas.
- Al saber aquello puedes elegir el programa correcto en la pagina oficial "https://nodejs.org/en/download/" 
- En el caso de que no quieras instalarlo como viene en el punto anterior, siempre puedes hacerlo mediante la terminal y el Package Management correspondiente a tu sistema "https://nodejs.org/en/download/package-manager/"

 - Se instala Git de misma manera dependiendo de cual sea tu *Sistema Operativo* 

* Mac "https://www.atlassian.com/git/tutorials/install-git#mac-os-x"
* Windows "https://www.atlassian.com/git/tutorials/install-git#windows"
* Linux "https://www.atlassian.com/git/tutorials/install-git#linux"

 -Una vez correctamente instalados podemos proceder al siguiente paso

 **Nota: Es importante que ambos esten instalados correctamente ya que sin ninguno de ellos Gatsby no correra debidamente o simplemente no funcionara**

*Creando un sitio Gatsby para nuestro SHINing*

**Nota:Este proyecto utiliza como Package Management "Yarn"**

- Se instala Gatsby globalmente usando el siguiente comando en terminal "npm install -g gatsby-cli"
- Se descarga mediante git el siguiente repo "https://github.com/bambimaster/Shining.git"
- Revisa el documento de configuracion "gatsby-config.js" para poder enlazar el IP de tu maquina (si es que SHINing World esta corriendo localmente) o el de tu servidor remoto (en el caso que este en un servidor en linea)
- Se recomienda que antes de probar que funcione se utilice en terminal "Yarn install" para instalar todos los plugins que ya vienen en el "yarn.lock"
- Para verificar que realmente se haya descargado hay que correrlo con los siguientes pasos:

* Entrando a la carpeta del proyecto mediante terminal
* Ya dentro de la carpeta en terminal solo corre el comando "Gatsby Develop"

Si todo salio como deberia, ¡Felicidades, estas listo para poder contribuir en este pequeño proyecto!

Ahora bien,ya que tenemos todo listo para poder crear nuestra primera branch, deberia contarte un poco acerca de lo que ah pasado en este codigo. 

#Manos a la obra "Empezando desde donde yo estoy, un pequeño brevario de como llego a estar  el master asi"
*¿que es todo lo que veo ahora y como llego alli?*

En este momento tenemos estructurado el sitio de esta manera

 /Shining.   
    
    ├── .cache
    ├── node_modules
    ├── public
    ├── src
        ├── Components
            ├── Albums
                ├── albums.js
            ├── Navigation
                ├── layout.js
        ├── Pages
            ├── about.js
            ├── index.js
        ├── Templates 
            ├── index.js
    ├── static
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package.json
    ├── Readme.md 
    └── yarn.lock

*.Cache* : Es donde viven todos los archivos cache de los plugins

*Node_Module*: En este directorio contiene todos los modulos de codigo de los cuales depende el proyecto (npm packages) son instalados automaticamente.

*Public*: Aqui tambien hay datos e iconos 

*Src*: En este directorio es donde inicia la magia, viene dividido en tres subdirectorios de los cuales solo dos tienen subdirectorios internos.
    
    *Components*:Es el primer subdirectorio, en este guarda dos subdirectorios importantes, basicamente "Components" es el que se dedica a ser quien muestra los datos de forma bonita ya en la pagina dirigida.

        *Albums*: Este subdirectorio es el encargado de tener la configuracion de las paginas de Albums
            *albums.js*:
            
        *Navigation*:

*¿Que es lo que sigue?*


