import React from "react";
import cx from "classnames";

interface TableRowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: "Pending" | "Success" | "Failed";
  image: string;
}

const TableRow = ({
  title,
  category,
  item,
  price,
  status,
  image,
}: TableRowProps) => {
  const statusClass = cx({
    "float-start icon-status": true,
    pending: status === "Pending",
    failed: status === "Failed",
    success: status === "Success",
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={image}
          width={80}
          height={60}
          alt="game-thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
