import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HomeMain from '../../components/main/Main';
import { fetchRecipes } from '../../store/RandomFoodSlice';
import { fetchCocktails } from '../../store/RandomCocktailsSlice';
import FoodRecipe from '../../components/list/ListItems';
import CockTailRecipe from '../../components/listCock/ListCock';

import AwesomeTitle from '../../components/title/AwesomeTitle';

function Home() {
  const dispatch = useDispatch();

  const foodRedux = useSelector((state) => state.randomFood);
  const cocktailRedux = useSelector((state) => state.cocktails);

  const [food, setFood] = useState(undefined);
  const [cocktail, setCocktail] = useState(undefined);

  useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(fetchCocktails());
  }, []);

  const random = () => Math.floor(Math.random() * (24 - 0)) + 0;

  const handleClick = () => {
    const number = random();
    setFood(foodRedux.recipes[number]);
    setCocktail(cocktailRedux.cocktails[number]);
  };
  console.log('data', food, cocktail);
  return (
    <>
      <HomeMain xs={12} md={4}>
        <div
          style={{
            marginLeft: '10px',
            minHeight: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <div>
            <AwesomeTitle />
          </div>

          <Typography style={{ color: '#6fffe9' }}>Let us suggest your food and drink </Typography>
          <Button
            variant="outlined"
            style={{ color: '#6fffe9', border: '1px solid #6fffe9 ' }}
            onClick={handleClick}
          >
            click here
          </Button>
        </div>
      </HomeMain>

      <HomeMain xs={12} md={5}>
        <FoodRecipe data={food} />
      </HomeMain>
      <HomeMain xs={12} md={5}>
        <CockTailRecipe data={cocktail} />
      </HomeMain>
    </>
  );
}

export default Home;
