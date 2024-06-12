import React, { ReactElement } from "react";

export enum BadgeType {
  PRIMARY = "primary",
  NEUTRAL = "neutral",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

export interface Props {
  children?: ReactElement;
  label?: string;
  type: BadgeType;
  size?: string;
}

export default function Badge({
  type = BadgeType.NEUTRAL,
  label,
  children,
  size = "small",
}: Props): ReactElement {
  const getClassName = (type: BadgeType) => {
    let color = "";
    let size = "";
    switch (type) {
      case BadgeType.PRIMARY:
        color = "bg-primary-100 text-primary";
        break;
      case BadgeType.NEUTRAL:
        color = "bg-neutral-100 text-neutral";
        break;
      case BadgeType.SUCCESS:
        color = "bg-success-100 text-success";
        break;
      case BadgeType.WARNING:
        color = "bg-warning-100 text-warning";
        break;
      case BadgeType.DANGER:
        color = "bg-danger-100 text-danger";
        break;
    }
    return `inline-block px-3 rounded-full ${color}`;
  };
  return <div className={getClassName(type)}>{children || label}</div>;
}
