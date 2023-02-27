import { ItemUseContext } from "../../content/item-contex";
import { CartUseContext } from "../../content/cart-contex";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemCard from "./card";
import { AddMenu } from "./addMenu";
import DisplayModal from "./ModalDisplay";
import History from "./History";
import { useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { menu } = CartUseContext();
  const menuList = menu.map((e, index) => {
    return <ItemCard key={index} info={e} />;
  });
  return (
    <Box sx={{ width: "80%", margin: "auto 10%", marginBottom: "60px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="All item" {...a11yProps(0)} />
          <Tab label="Add item" {...a11yProps(1)} />
          <Tab label="History" {...a11yProps(2)} />
          <Tab label="Sales" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div id="menulist">{menuList}</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddMenu />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <History />
      </TabPanel>
      <TabPanel value={value} index={3}>
        task 4
      </TabPanel>
      <DisplayModal />
    </Box>
  );
}
