import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Albums from '../components/Albums/albums';

const styles = (theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
}));

const albumsTemplate = (props) => {
  const { classes } = { classes }
  const { nodeAlbums: Album } = props.data;
  console.log(props)
  console.log("Wololo", Album);
  
  return (
    <Layout>
      <Helmet
        title={`SHINee - ${Album.title}`}
        meta={[
          {name: 'description', content: Album.title},
        ]}
      />
      <Paper className={classes}>
 <Albums
 {...Album}
         title={Album.title}
          path={Album.path.alias}
          description={Album.body.processed}
          
          Id={Album.drupal_id}
        /> 
      </Paper>
    </Layout>
  )
};
export default withStyles(styles)(albumsTemplate); 

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql`
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