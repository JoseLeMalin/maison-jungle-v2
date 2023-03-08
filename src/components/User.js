import * as React from "react";
import { Grid, Avatar, Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Allheroes from "../assets/All-heroes-in-one-picture.jpg";

const User = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "5%",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        className="user-container"
        gridAutoColumns={true}
        container
        columns={{ xs: 1, sm: 2 }}
        paddingTop={{ xs: 5 }}
      >
        <Grid key={"user-info"} xs={1}>
          <Item>
            <Grid key={"avatar"} >
              <Avatar alt="PP" src={Allheroes} sx={{ width: 164, height: 164 }} />
            </Grid>
            <Grid key={"name"}>
              Pseudo: JoséLeMalin
              Nom: LeMalin
              Prénom: José
            </Grid>
          </Item>
        </Grid>
        <Grid key={"lorem 1"} xs={1}>
          <Item><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p></Item>

        </Grid>
        <Grid key={"lorem 2"} xs={1}>
          <Item><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p></Item>

        </Grid>
      </Grid>
    </Box>
  );
};

export default User;

/*{
  /* <Box key={"avatar"}>
          <Avatar alt="PP" src={Allheroes} sx={{ width: 164, height: 164 }} />
        </Box>
        <Box key={"lorem 1"}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Box>
        <Box key={"lorem 2"}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Box> */
/*}*/