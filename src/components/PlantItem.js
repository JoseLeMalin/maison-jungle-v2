import CareScale from "./CareScale.js";
import "../styles/PlantItem.css";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";

function PlantItem({ name, cover, light, water }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const containerRef = useRef(null);
  const styleBox = {
    //display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 50,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const displayCareScale = () => {
    return (
      //<Collapse orientation="vertical" in={open}>
      <Slide direction="up" in={open} container={containerRef.current}>
        <Box style={styleBox}>
          <div>
            <CareScale scaleValue={light} careType="light" />
          </div>
          <div>
            <CareScale scaleValue={water} careType="water" />
          </div>
        </Box>
      </Slide>
    );
  };
  return (
    <div>
      <li>
        <div>{name}</div>
        <img src={cover} alt={`This is a ${name}`} className="lmj-logo"></img>
        <div>
          <Button onClick={handleOpen}>
            {open ? "Fermer détails" : "Ouvrir détails"}
          </Button>
        </div>
        <div>{displayCareScale()}</div>
      </li>
    </div>
  );
}

export default PlantItem;

//<div>
//      <li>
//        {name}
//        <img src={cover} alt={`This is a ${name}`} className="lmj-logo"></img>
//        <div>
//          <Button onClick={handleOpen}>Open modal</Button>
//          <Modal
//            open={open}
//            onClose={handleClose}
//            aria-labelledby="modal-modal-title"
//            aria-describedby="modal-modal-description"
//          >
//            <Box sx={style}>
//              <Typography id="modal-modal-title" variant="h6" component="h2">
//                Apports plante
//              </Typography>
//              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                <CareScale scaleValue={light} careType="light" />
//                <CareScale scaleValue={water} careType="water" />
//              </Typography>
//            </Box>
//          </Modal>
//        </div>
//        <CareScale scaleValue={light} careType="light" />
//        <CareScale scaleValue={water} careType="water" />
//      </li>
//    </div>
//{open ? displayCareScale() : null}
