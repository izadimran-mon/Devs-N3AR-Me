import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import AuroraLogo from "../../assets/aurora-stack-rev.svg";
import NearLogo from "../../assets/near_logo_stack_wht.svg";

import { AuroraConnect } from "./AuroraConnect";
import { NearConnect } from "./NearConnect";

const BootstrapButton = styled(Button)({
  backgroundColor: "#5CE1E6",
  fontWeight: "700",
  color: "black",
  ":hover": {
    backgroundColor: "#5CE1E6",
  },
});

const ImageButton = styled(Button)({
  backgroundColor: "none",
  fontWeight: "700",
  color: "white",
  ":hover": {
    backgroundColor: "none",
  },
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#161522",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ConnectWallet({ provider }: { provider: any }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [auroraOpen, setAuroraOpen] = useState(false);
  const [nearOpen, setNearOpen] = useState(false);

  return (
    <div>
      <BootstrapButton
        onClick={handleOpen}
        className="bg-[#5CE1E6] w-44 px-3 py-1 rounded-sm"
        variant="contained"
      >
        Connect Wallet
      </BootstrapButton>
      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="rounded-md w-72 md:w-96">
            <Typography
              id="parent-modal-title"
              variant="h6"
              component="h2"
              className="w-full flex flex-row"
            >
              Select a wallet
              <IconButton
                aria-label="delete"
                color="inherit"
                style={{
                  marginLeft: "auto",
                  padding: "0",
                }}
              >
                <CloseIcon
                  className="closeModal text-sm"
                  onClick={handleClose}
                />
              </IconButton>
            </Typography>
            <div
              id="parent-modal-description"
              className="flex w-full h-full my-5"
            >
              <ImageButton
                className="nearWallet"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={() => setNearOpen(true)}
              >
                <img src={NearLogo} alt="near" className=" w-32 h-32" />
              </ImageButton>
              <Divider
                orientation="vertical"
                flexItem
                className=" bg-slate-600"
              />
              <ImageButton
                className="auroraWallet"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                onClick={() => setAuroraOpen(true)}
              >
                <img
                  src={AuroraLogo}
                  alt="near"
                  className="object-cover w-32 h-32"
                />
              </ImageButton>
            </div>
            {auroraOpen && (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setAuroraOpen(false)}
              >
                <Fade in={open}>
                  <Box sx={style} className="flex flex-col gap-4">
                    <IconButton
                      aria-label="delete"
                      color="inherit"
                      style={{
                        marginLeft: "auto",
                        padding: "0",
                      }}
                    >
                      <CloseIcon
                        className="closeModal text-sm"
                        onClick={() => setAuroraOpen(false)}
                      />
                    </IconButton>
                    <AuroraConnect provider={provider} />
                  </Box>
                </Fade>
              </Modal>
            )}
            {nearOpen && (
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setNearOpen(false)}
              >
                <Fade in={open}>
                  <Box sx={style} className="flex flex-col">
                    <IconButton
                      aria-label="delete"
                      color="inherit"
                      style={{
                        marginLeft: "auto",
                        padding: "0",
                      }}
                    >
                      <CloseIcon
                        className="closeModal text-sm"
                        onClick={() => setNearOpen(false)}
                      />
                    </IconButton>
                    <NearConnect />
                  </Box>
                </Fade>
              </Modal>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
