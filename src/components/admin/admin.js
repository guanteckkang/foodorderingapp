import { Helmet } from "react-helmet";
import "./admin.css";
import { BasicTabs } from "./tab";

export const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <BasicTabs></BasicTabs>
    </>
  );
};
