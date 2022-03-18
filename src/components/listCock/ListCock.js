import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import WineBarIcon from '@mui/icons-material/WineBar';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListItem({ data }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!data) return <div />;

  return (
    <Card
      elevation={8}
      sx={{
        scrollbarWidth: 'thin',

        maxWidth: 450,
        backgroundColor: '#1c2541',
        color: '#5BC0BE',
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={data.strDrinkThumb} />}
        action={
          <IconButton aria-label="settings" href="https://www.thecocktaildb.com/" target="_blank">
            <WineBarIcon sx={{ color: '#5BC0BE' }} />
          </IconButton>
        }
        title={data.strDrink}
        sx={{ '.css-et1ao3-MuiTypography-root': { fontSize: '2rem' } }}
      />
      <CardMedia component="img" height="250" image={data.strDrinkThumb} alt={data.strMeal} />
      <CardContent
        sx={{
          color: '#5BC0BE',
          maxHeight: 152,
          overflowY: 'auto',
        }}
      >
        <Typography variant="body2" color="color: '#5BC0BE'">
          <p>{data.strInstructions} </p>
          <p>
            Type:{data.strAlcoholic}
            <br />
            Category:{data.strCategory}
            <br /> Glass:{data.strGlass}
          </p>
        </Typography>

        <Typography variant="h6" sx={{ margin: '10px 0' }}>
          Ingredients and measurements:
        </Typography>

        <Typography sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <p>{data.strIngredient1 ? data.strIngredient1 : null}</p>
            <p>{data.strIngredient2 ? data.strIngredient2 : null}</p>
            <p>{data.strIngredient3 ? data.strIngredient3 : null}</p>
            <p>{data.strIngredient4 ? data.strIngredient4 : null}</p>
            <p>{data.strIngredient5 ? data.strIngredient5 : null}</p>
            <p>{data.strIngredient6 ? data.strIngredient6 : null}</p>
            <p>{data.strIngredient7 ? data.strIngredient7 : null}</p>
            <p>{data.strIngredient8 ? data.strIngredient8 : null}</p>
            <p>{data.strIngredient9 ? data.strIngredient9 : null}</p>
            <p>{data.strIngredient10 ? data.strIngredient10 : null}</p>
            <p>{data.strIngredient11 ? data.strIngredient11 : null}</p>
            <p>{data.strIngredient12 ? data.strIngredient12 : null}</p>
            <p>{data.strIngredient13 ? data.strIngredient13 : null}</p>
            <p>{data.strIngredient14 ? data.strIngredient14 : null}</p>
            <p>{data.strIngredient15 ? data.strIngredient15 : null}</p>
            <p>{data.strIngredient16 ? data.strIngredient16 : null}</p>
            <p>{data.strIngredient17 ? data.strIngredient17 : null}</p>
            <p>{data.strIngredient18 ? data.strIngredient18 : null}</p>
            <p>{data.strIngredient19 ? data.strIngredient19 : null}</p>
            <p>{data.strIngredient20 ? data.strIngredient20 : null}</p>
          </div>
          <div>
            <p>{data.strMeasure1 ? data.strMeasure1 : null}</p>
            <p>{data.strMeasure2 ? data.strMeasure2 : null}</p>
            <p>{data.strMeasure3 ? data.strMeasure3 : null}</p>
            <p>{data.strMeasure4 ? data.strMeasure4 : null}</p>
            <p>{data.strMeasure5 ? data.strMeasure5 : null}</p>
            <p>{data.strMeasure6 ? data.strMeasure6 : null}</p>
            <p>{data.strMeasure7 ? data.strMeasure7 : null}</p>
            <p>{data.strMeasure8 ? data.strMeasure8 : null}</p>
            <p>{data.strMeasure9 ? data.strMeasure9 : null}</p>
            <p>{data.strMeasure10 ? data.strMeasure10 : null}</p>
            <p>{data.strMeasure11 ? data.strMeasure11 : null}</p>
            <p>{data.strMeasure12 ? data.strMeasure12 : null}</p>
            <p>{data.strMeasure13 ? data.strMeasure13 : null}</p>
            <p>{data.strMeasure14 ? data.strMeasure14 : null}</p>
            <p>{data.strMeasure15 ? data.strMeasure15 : null}</p>
            <p>{data.strMeasure16 ? data.strMeasure16 : null}</p>
            <p>{data.strMeasure17 ? data.strMeasure17 : null}</p>
            <p>{data.strMeasure18 ? data.strMeasure18 : null}</p>
            <p>{data.strMeasure19 ? data.strMeasure19 : null}</p>
            <p>{data.strMeasure20 ? data.strMeasure20 : null}</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
