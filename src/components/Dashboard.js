import { Box, Container, Divider, Grid, Button } from "@material-ui/core";
import TopCard from "../components/TopCard";
import { makeStyles } from "@material-ui/core/styles";
import SecondCard from "../components/SecondCard";
import TableData from "../components/TableData";
import PopUp from "../components/PopUp";

const useStyle = makeStyles({});

const Dashboard = () => {
  const classes = useStyle();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TopCard />
            </Grid>
            <Grid item lg={9} sm={6} xl={9} xs={12}>
              <SecondCard />
            </Grid>
            {/* <Box>
              <Button variant="contained" color="primary" >
                Add Post Link
              </Button>
            </Box> */}
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <PopUp />
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <TableData />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
