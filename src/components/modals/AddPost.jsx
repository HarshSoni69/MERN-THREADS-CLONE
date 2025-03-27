import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";
import { useRef, useState } from "react";

const AddPost = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _300 = useMediaQuery("(min-width:300px)");

  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);

  const mediaRef = useRef();

  const handlePost = () =>{};
  const handleClose = () => {};

  const handleMediaRef = () => {
    mediaRef.current.click();
  };

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      fullWidth
      fullScreen={_700 ? false : true}
    >
      {/* Close Button */}
      <Box
        position="absolute"
        top={15}
        right={15}
        sx={{ cursor: "pointer" }}
        onClick={handleClose}
      >
        <RxCross2 size={28} />
      </Box>

      <DialogTitle textAlign="center" sx={{ fontWeight: "bold" }}>
        New Thread...
      </DialogTitle>

      <DialogContent sx={{ maxHeight: "60vh", overflowY: "auto" }}>
        <Stack flexDirection="row" gap={2} mb={3}>
          <Avatar src="" alt="User Avatar" />

          <Stack sx={{ width: "100%" }}>
            <Typography variant="h6" fontSize="1rem" fontWeight="bold">
              Harsh Soni
            </Typography>

            <Box
              component="textarea"
              rows={3}
              placeholder="Start a Thread..."
              autoFocus
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{
                width: "100%",
                resize: "none",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                fontSize: "1rem",
                color: "#333",
                backgroundColor: "#fafafa",
                "&:focus": {
                  borderColor: "#007bff",
                  outline: "none",
                },
              }}
            />

            {media && (
              <Box
                component="img"
                src={URL.createObjectURL(media)}
                alt="Preview"
                width={_500 ? 300 : _300 ? 200 : 100}
                height={_500 ? 300 : _300 ? 200 : 100}
                sx={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  mt: 2,
                }}
              />
            )}

            {/* Image Upload Icon */}
            <FaImages
              size={28}
              onClick={handleMediaRef}
              style={{ cursor: "pointer", marginTop: "10px", color: "#007bff" }}
            />
            <input
              type="file"
              accept="image/*"
              ref={mediaRef}
              style={{ display: "none" }}
              onChange={(e) => setMedia(e.target.files[0])}
            />
          </Stack>
        </Stack>

        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontSize="1rem" color="gray">
            Anyone can reply
          </Typography>
          <Button
            size="large"
            onClick={handlePost}
            sx={{
              bgcolor: "GrayText",
              color: "white",
              borderRadius: "10px",
              ":hover": { bgcolor: "gray", cursor: "pointer" },
            }}
          >
            Post
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default AddPost;
