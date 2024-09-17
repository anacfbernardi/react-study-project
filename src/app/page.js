import { Fragment } from "react";
import List from "./pages/list";
import Schedule from "./pages/schedule";

export default function Home() {
  return (
    <Fragment>
      <List/>
      <Schedule/>
    </Fragment>   
  );
}
