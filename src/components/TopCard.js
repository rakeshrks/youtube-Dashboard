import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const TopCard = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={4}>
          <img src="youtube.png" alt="logo" height="60px" width="90px" />
          <Button variant="outlined" color="secondary">
            <ThumbUpAltIcon />
            150
          </Button>
        </Grid>
        <Divider />
        <Grid item xs={8}>
          {" "}
          <Typography color="textSecondary" gutterBottom>
            Total Engagement Score
          </Typography>
          <Typography color="textPrimary" variant="h3">
            6.04
          </Typography>
          <Button variant="contained" color="primary" size="small">
            Excellent
          </Button>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          pt: 2,
          display: "flex",
          //   alignItems: "center",
        }}
      >
        <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1,
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since last month
        </Typography>
      </Box> */}
    </CardContent>
  </Card>
);

export default TopCard;
