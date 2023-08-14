import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function Itemcard(props) {
  console.log(props);
  return (
    <>
      <Card
        className="shadow rounded bg-info mb-4 border border-danger"
        style={{ width: 400 }}>
        <CardActionArea style={{ height: 500, width: 400 }}>
          <CardContent>
            <Typography
              className="text-center"
              color={"purple"}
              gutterBottom
              variant="h5"
              component="div"
              marginBottom={10}>
              Event Name : {props.item.eventName}
            </Typography>
            <Typography
              className="text-center"
              fontWeight={"900"}
              gutterBottom
              variant="h6"
              component="div"
              marginBottom={10}>
              Event Cost : {props.item.eventCost}
              {/* xyzw */}
            </Typography>
            <Typography
              className="text-center"
              fontWeight={"900"}
              gutterBottom
              variant="h6"
              component="div"></Typography>
            <Typography
              className="text-center"
              fontWeight={"900"}
              gutterBottom
              variant="h6"
              component="div">
              Event Date : {props.item.eventDate}
            </Typography>

            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Itemcard;
