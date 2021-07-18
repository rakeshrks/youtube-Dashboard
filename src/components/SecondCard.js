import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import CommentIcon from "@material-ui/icons/Comment";
import FeedbackIcon from "@material-ui/icons/Feedback";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const SecondCard = (props) => (
  <Card {...props}>
    <CardContent>
      <div>
        <Typography
          style={{
            fontSize: "14",
            color: "textSecondary",
            width: "50%",
            textAlign: "left",
            float: "left",
          }}
          gutterBottom
        >
          Statics
        </Typography>
        <Typography
          style={{
            fontSize: "14",
            color: "textSecondary",
            width: "50%",
            textAlign: "right",
            float: "right",
          }}
          gutterBottom
        >
          Overall Data
        </Typography>
      </div>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <IconButton aria-label="settings">
                  <VisibilityIcon color="primary" fontSize="medium" />
                </IconButton>
              </Avatar>
            }
            // action={}
            title="Total View"
            subheader="35"
          />
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <IconButton aria-label="settings">
                  <ThumbUpAltIcon color="primary" fontSize="medium" />
                </IconButton>
              </Avatar>
            }
            // action={}
            title="Total Like"
            subheader="35"
          />
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <IconButton aria-label="settings">
                  <ThumbDownAltIcon color="primary" fontSize="medium" />
                </IconButton>
              </Avatar>
            }
            // action={}
            title="Dislike"
            subheader="35"
          />
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <IconButton aria-label="settings">
                  <CommentIcon color="primary" fontSize="medium" />
                </IconButton>
              </Avatar>
            }
            // action={}
            title="Comments"
            subheader="35"
          />
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <IconButton aria-label="settings">
                  <FeedbackIcon color="primary" fontSize="medium" />
                </IconButton>
              </Avatar>
            }
            // action={}
            title=" Engagement"
            subheader="35"
          />
        </Grid>
        <Grid item xs={2}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <IconButton aria-label="settings">
                  <ShowChartIcon color="primary" fontSize="medium" />
                </IconButton>
              </Avatar>
            }
            // action={}
            title="Eng Rate"
            subheader="35"
          />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default SecondCard;
