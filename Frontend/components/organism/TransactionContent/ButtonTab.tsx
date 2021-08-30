import React from "react";
import cx from "classnames";
interface ButtonTabProps {
  title: string;
  active?: boolean;
}

const ButtonTab = ({ title, active }: Partial<ButtonTabProps>) => {
  const buttonClass = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": active,
  });

  return (
    <a data-filter="*" href="#" className={buttonClass}>
      {title}
    </a>
  );
};

export default ButtonTab;
