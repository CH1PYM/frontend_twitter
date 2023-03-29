import Avatar from '@mui/material/Avatar';


export const ProfilePicture = () => {
    return(
        <Avatar sx={{width: 110 ,height: 110,border:"2px solid black"}} alt="Remy Sharp" src={require('../../../assets/face.webp')} />
    )
}