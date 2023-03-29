import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button, ButtonGroup } from "@mui/material";
import { ProfilePicture } from "./ProfilePicture";
import Box from "@mui/material/Box";
import { ButtonBar } from "./ButtonBar";

export default function ProfileCard() {
  return (
    <Box>
      <Box
        sx={{ position: "relative", top: "370px", left: "655px", zIndex: 1 }}
      >
        <ButtonBar />
      </Box>
      <Box sx={{ position: "relative", top: "250px", left: "25px", zIndex: 1 }}>
        <ProfilePicture />
      </Box>
      <Card sx={{ maxWidth: 1500, paddingBottom: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            src={require("../../../assets/profileBackground.jpg")}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              sx={{ marginTop: 5 }}
              gutterBottom
              variant="h5"
              component="div"
            >
              Lizard
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <ButtonGroup
        sx={{
          paddingTop: 0,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          sx={{ flexGrow: 1, fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Tweets
        </Button>
        <Button
          sx={{ flexGrow: 1, fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Replies
        </Button>
        <Button
          sx={{ flexGrow: 1, fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Media
        </Button>
        <Button
          sx={{ flexGrow: 1, fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Likes
        </Button>
      </ButtonGroup>
    </Box>
  );
}
