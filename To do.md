#This Is a To Do For SHINIng World Solo Albums Gatsby Ver.

- El primer problema que se necesita trabajar seria en la muestra de contenido, el query que se busca es el siguiente :
    * queryeAlbums (drupal_id: {eq: $drupal_id}){
        title
        path: path {
          alias
        }
        body:body{
          processed
        }
        list: field_lista_de_canciones {
          title
          uri
        }
        categoria: relationships {
              field_modalidad {
            name
          }     
          }
        Id: drupal_id
      }
    } *

ya que de los seis tipos de informacion que tiene solo se logran ver tres, tenemos un problema con los hijos que tiene el campo "Categoria" y "Lista de canciones"
- se necesita habilitar otro campo en el query para poder insertar la imagen de la portada del album
- se necesitaria trabajar en poder colocar los links para spotify
- Añadir estilos y organizacion de cada campo para hacer la pagina fluir
- Hacer un index para enlazar las paginas.
- Hacer un about para la pagina.
