import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const albums = (props) => (  <pre>{JSON.stringify(props, null, 10)}
  <>
  <Typography variant="h2" paragraph>{props.title}</Typography>
  <GridList cols={5} cellHeight="auto">
    <ListItem>
    <ListItemText primary="Difficulty" secondary={props.path} />
  </ListItem>
  <ListItem>
    <ListItemText primary="Cooking time" secondary={`${props.path} minutes`} />
    </ListItem>
    <ListItem>
      <ListItemText primary="Preparation time" secondary={`${props.title} minutes`} />
    </ListItem>
    <ListItem>
    <ListItemText primary="Category" secondary={props.title} />
  </ListItem>
  {props.tags &&
  <ListItem>
    <ListItemText primary="Tags" secondary={props.categoria.map(item => item.name)}/>
  </ListItem>
  }
  </GridList>

  <Typography variant="subtitle1">Summary:</Typography>
  <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.description }} />

  <Typography variant="subtitle1">Ingredients:</Typography>
  

  <Typography variant="subtitle1">Preparation:</Typography>
  <Typography variant="body1" paragraph dangerouslySetInnerHTML={{ __html: props.categoria  }} />

</>
</pre>
);
albums.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  categoria: PropTypes.arrayOf(PropTypes.string),
  description:  PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  };

  
export default albums;