import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import { Button, ImageListItem } from "@mui/material";
import AfroSamurai from "../assets/Afro_Samurai.jpg";
import Allheroes from "../assets/All-heroes-in-one-picture.jpg";
import monstera from "../assets/monstera.jpg";
import leaf from "../assets/leaf.png";
import Fade from "@mui/material/Fade";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";

const itemData = [
  {
    img: AfroSamurai,
    title: "AfroSamurai",
  },
  {
    img: Allheroes,
    title: "Allheroes",
  },
  {
    img: monstera,
    title: "monstera",
  },
];

export const Home = ({ cart, setCart, cartOpened }) => {
  const LinkBehavior = forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/ShoppingList" {...props} role={undefined} />
  ));

  return (
    <Box>
      <Box>
        <h3>
          <img
            src={leaf}
            alt="La Maison Jungle icon"
            className="lmj-banner-logo"
          ></img>
          La Maison Jungle
        </h3>
      </Box>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <Fade in={cartOpened} key={item.img + 123}>
            <ImageListItem key={item.img}>
              {
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              }
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
      <Box>
        <Box key={"ShoppingListBoxRoute"}>
          <Button variant="contained" component={LinkBehavior}>
            Redirect Button
          </Button>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};
