import React, {   useState } from "react";
import {   useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
 
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
 
import ShareIcon from "@mui/icons-material/Share";
 
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const Posts = () => {
  const myCards = [
    
    {
      letter: "K",
      color: "#053ea8",
      userName: "Ali Hassan",
      imgLink:
        "https://images.pexels.com/photos/3480792/pexels-photo-3480792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "A",
      color: "#a020f0",
      userName: "do3aa Hassan",
      imgLink:
        "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "N",
      color: "#008080",
      userName: "Alaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "M",
      color: "#053ea8",
      userName: "Walaa Hassan",
      imgLink:
        "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
  const theme = useTheme()

  return (
    <Box component="main" sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card key={item.imgLink} sx={{ maxWidth: {xs: "97%", sm: 444}, mx: "auto", my: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ color: theme.palette.getContrastText(item.color) ,bgcolor: item.color }} aria-label="recipe">
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <Box flexGrow={1} />

              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}

      {renderMenu}
    </Box>
  );
};

export default Posts;
