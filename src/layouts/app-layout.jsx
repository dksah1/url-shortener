import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        {/* header */}

        {/* body */}
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
};

export default AppLayout;
