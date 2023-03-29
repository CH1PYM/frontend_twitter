/*import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container, Box } from "@material-ui/core";*/
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import {
  Button,
  Avatar,
  Card,
  CardContent,
  Typography,
  Container,
  Box,
  CardActions,
} from "@mui/material";
import { PostHeader } from "./postHeader";

interface Props {
  id: number;
  date: string;
  text: string;
  likes?: number;
  retweet?: number;
  userId: number;
}
export function Post(props: Props) {
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#657786",
          color: "white",
          border: "1px solid #AAB8C2",
        }}
      >
        <CardContent>
          <PostHeader id={props.userId}/>
          <Typography variant="body1">{props.text}</Typography>
          <Typography sx={{ marginTop: "10px" }} variant="body2">
            {props.date}
          </Typography>
        </CardContent>
        <hr />
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#657786",
            width: "100%",
          }}
        >
          <Button variant="text" size="small">
            <CommentIcon />{" "}
          </Button>
          <Button variant="text" size="small">
            <FavoriteBorderIcon />
          </Button>
          <Button variant="text" size="small">
            <RepeatOutlinedIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
