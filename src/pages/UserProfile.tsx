import { Box, Container, TextField,Button } from "@mui/material";
import ProfileCard from "../features/user/components/ProfileCard";
import { ProfilePicture } from "../features/user/components/ProfilePicture";
import { ButtonBar } from "../features/user/components/ButtonBar";
import { Post } from "../components/post";

export const UserProfile = () => {
    return (
        <Container sx={{ marginTop:3, display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection:"column" ,border:"2px black solid"}}>
           
            <Box sx={{flexShrink:"0",/*border:"2px black solid",*/ width: "75%"}}>
                <ProfileCard/>
                <Post id={6} date={"5.6.4"} text={"hjkhjk"} userId={15} />
            </Box>
        </Container>
      );
}