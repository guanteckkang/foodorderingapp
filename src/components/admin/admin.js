import { Helmet } from "react-helmet";
import "./admin.css";
import { BasicTabs } from "./tab";

export const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <h1 style={{ textAlign: "center" }}>Welcome admin</h1>
      <BasicTabs></BasicTabs>
    </>
  );
};
