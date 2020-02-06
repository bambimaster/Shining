This Is a To Do For SHINIng World Solo Albums Gatsby Ver.

1-El primer problema que se necesita trabajar seria en la muestra de contenido, el query que se busca es el siguiente :
 
 query AllAlbums ($drupal_id: String!) {
  nodeAlbums (drupal_id: {eq: $drupal_id}){
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
    }`

ya que de los seis tipos de informacion que tiene solo se logran ver tres, tenemos un problema con los hijos que tiene el campo "Categoria" y "Lista de canciones"
2.- se necesita habilitar otro campo en el query para poder insertar la imagen de la portada del album
3-se necesitaria trabajar en poder colocar los links para spotify
4.- Añadir estilos y organizacion de cada campo para hacer la pagina fluir
5.- Hacer un index para enlazar las paginas.
6.- Hacer un about para la pagina.
