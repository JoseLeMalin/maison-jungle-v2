import CareScale from "./CareScale.js";
import "../styles/PlantItem.css";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { useRef, useState } from "react";
function PlantItem({ name, cover, light, water }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const containerRef = useRef(null);

  const displayCareScale = () => {
    return (
      //<Collapse orientation="vertical" in={open}>
      <Slide
        direction="up"
        in={open}
        mountOnEnter
        unmountOnExit
        container={containerRef.current}
      >
        <div>
          <CareScale scaleValue={light} careType="light" />

          <CareScale scaleValue={water} careType="water" />
        </div>
      </Slide>
    );
  };
  return (
    <div ref={containerRef}>
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
