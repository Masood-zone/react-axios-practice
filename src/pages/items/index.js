import React from "react";
import { Card } from "../../components/card";
import Input from "../../components/input";
import AddItems from "./add";

const MainApp = () => {
  return (
    <div>
      <Card title="Record Book">
        <form>
          <Input title="Email Address" type="date" id="dateId" />
        </form>
        <AddItems />
      </Card>
    </div>
  );
};

export default MainApp;
