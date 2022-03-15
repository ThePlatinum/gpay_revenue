import {
  BottomChild,
  ButtonBox,
  Child,
  Container,
  Heading,
  LeftExtra,
  LeftTop,
  Main,
  RightTop,
  SelectBox,
  Top,
  TopChild,
  TopLeft,
  TopRight,
} from "./dashboard.style";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import arrow from "../../images/Arrow 3.png"
import download from "../../images/Download.png"
const Dashboard = () => {
  return (
    <Container>
      <Navbar />
      <Child>
        <TopChild>
          <TopLeft>
            <Typography variant="h4">Olamilekan</Typography>
            <Typography variant="body1">
              TIN &gt; 1234567890987654321
            </Typography>
            <Typography variant="body2">
              Email Address &gt; babalolasimon@gmail.com
            </Typography>
            <Typography variant="body2">
              Phone Number &gt; 0816 244 0786
            </Typography>
          </TopLeft>
          <TopRight>
            <Button variant="contained">Click here to pay your tax</Button>
          </TopRight>
        </TopChild>
        <BottomChild>
          <Top>
            <LeftTop>
              <Typography variant="h4">Wallet ID</Typography>
              <LeftExtra>
              <Typography variant="body1">2987654321</Typography>
              <img src={arrow} alt="arrow" />
              </LeftExtra>
             
            </LeftTop>
            <RightTop>
              <Typography variant="body1">Available Funds</Typography>
              <Typography variant="h4">#32,750,00</Typography>
            </RightTop>
          </Top>
          <ButtonBox>
              <Button variant="contained">Fund Account</Button>
              <Button variant="contained" className="link">Link Account</Button>
          </ButtonBox>
        </BottomChild>
        
      </Child>
      <Main>
          <Heading>
              <Typography variant="h4">My Transaction History</Typography>
              <SelectBox>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select defaultValue="All Transaction">
<MenuItem value="All Transaction">All Transaction</MenuItem>
                  </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select defaultValue="Dec. 11, 2022 - Feb. 20, 2022">
<MenuItem value="Dec. 11, 2022 - Feb. 20, 2022" selected>Dec. 11, 2022 - Feb. 20, 2022</MenuItem>
                  </Select>
              </FormControl>
              </SelectBox>
          </Heading>
          <TableContainer component={Box}>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>
                              Transaction Date
                          </TableCell>
                          <TableCell>
                              Transaction ID
                          </TableCell>
                          <TableCell>
                             Type of tax
                          </TableCell>
                          <TableCell>
                              Transaction Status
                          </TableCell>
                          <TableCell>
                              Download Receipt
                          </TableCell>
                      </TableRow>
                  </TableHead>
                  <Typography variant="h6">February</Typography>
                  <TableBody>
                      <TableRow>
                          <TableCell>Feb. 20, 2022</TableCell>
                          <TableCell>5636-658</TableCell>
                          <TableCell>Personal income</TableCell>
                          <TableCell>Completed</TableCell>
                          <TableCell>
                              <img src={download} alt="download logo" />
                          </TableCell>
                      </TableRow>
                      
                      <TableRow>
                          <TableCell>Feb. 19, 2022</TableCell>
                          <TableCell>0086-961</TableCell>
                          <TableCell>Property tax</TableCell>
                          <TableCell>Pending</TableCell>
                          <TableCell>
                              <img src={download} alt="download logo" />
                          </TableCell>
                      </TableRow>
                      <Typography variant="h6">January</Typography>
                      <TableRow>
                          <TableCell>Jan. 30, 2022 </TableCell>
                          <TableCell>5771-649</TableCell>
                          <TableCell>Capita gain tax</TableCell>
                          <TableCell>Completed</TableCell>
                          <TableCell>
                              <img src={download} alt="download logo" />
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>Jan. 29, 2022 </TableCell>
                          <TableCell>5765-644</TableCell>
                          <TableCell>Capita gain tax</TableCell>
                          <TableCell>Failed</TableCell>
                          <TableCell>
                              <img src={download} alt="download logo" />
                          </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>Jan. 07, 2022 </TableCell>
                          <TableCell>5636-658</TableCell>
                          <TableCell>Personal income</TableCell>
                          <TableCell>Completed</TableCell>
                          <TableCell>
                              <img src={download} alt="download logo" />
                          </TableCell>
                      </TableRow>
                      <Typography variant="h6">December</Typography>
                      <TableRow>
                          <TableCell>Dec. 11, 2021  </TableCell>
                          <TableCell>8776-018</TableCell>
                          <TableCell>Personal income</TableCell>
                          <TableCell>Completed</TableCell>
                          <TableCell>
                              <img src={download} alt="download logo" />
                          </TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default Dashboard;
