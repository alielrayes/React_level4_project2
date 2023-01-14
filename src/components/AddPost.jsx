import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import {
  Avatar,
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";

const AddPost = () => {
  const theme = useTheme();
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <>
      <Tooltip
        sx={{ position: "fixed", bottom: "22px", left: "22px" }}
        title="Add Post"
      >
        <Fab
          onClick={() => {
            setIsOpen(true);
          }}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        sx={{}}
        open={IsOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            top: "50%",
            left: "50%",
            transform: " translate(-50%, -50%)",
            padding: "22px",
            borderRadius: "6px",

            position: "fixed",
            bgcolor: theme.palette.background.default,
            width: {xs: "97%", sm : 399},
          }}
        >
          <Typography
            sx={{ textAlign: "center", mb: 1 }}
            variant="h6"
            component="h2"
          >
            Create a post
          </Typography>

          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://i.pinimg.com/474x/1b/61/45/1b614533bde5ad1760664fd6c35dd895.jpg"
            />
            <Typography variant="body1">Layla Hassan</Typography>
          </Stack>

          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={3}
            placeholder="What is in your mind ..."
            variant="standard"
          />

          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup
            sx={{ width: "100%" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ flexGrow: 1 }}>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default AddPost;
