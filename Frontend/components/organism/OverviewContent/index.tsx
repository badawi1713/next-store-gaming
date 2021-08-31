import React from "react";
import Category from "./Category";
import TableRow from "./TableRow";

const OverviewContent = () => {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={18000500} icon={"/assets/icon/ic-desktop.svg"}>
                Game
                <br /> Desktop
              </Category>
              <Category nominal={8000500} icon={"/assets/icon/ic-mobile.svg"}>
                Game
                <br /> Mobile
              </Category>
              <Category nominal={5000000} icon={"/assets/icon/ic-other.svg"}>
                Other
                <br /> Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  status={"Pending"}
                  title="Mobile Legend"
                  price={450000}
                  item={200}
                  category={"Mobile"}
                  image={"/assets/img/overview-1.png"}
                />
                <TableRow
                  status={"Success"}
                  title="Mobile Legend"
                  price={450000}
                  item={200}
                  category={"Mobile"}
                  image={"/assets/img/overview-1.png"}
                />
                <TableRow
                  status={"Success"}
                  title="Mobile Legend"
                  price={450000}
                  item={200}
                  category={"Mobile"}
                  image={"/assets/img/overview-1.png"}
                />
                <TableRow
                  status={"Failed"}
                  title="Mobile Legend"
                  price={450000}
                  item={200}
                  category={"Mobile"}
                  image={"/assets/img/overview-1.png"}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OverviewContent;
