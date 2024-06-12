import React, { ReactElement } from "react";

export enum BadgeType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}
export interface Props {
  children?: ReactElement;
  label?: string;
  type: BadgeType;
}

export default function Badge({
  type = BadgeType.PRIMARY,
  label,
  children,
}: Props): ReactElement {

  const getClassName = (type: BadgeType) => {
    let color = "";
    switch (type) {
      case BadgeType.PRIMARY:
        color =  'bg-primary-100 text-primary';
        break;
      case BadgeType.SECONDARY:
        color =  'bg-secondary-100 text-secondary';
        break;
      case BadgeType.SUCCESS:
        color =  'bg-success-100 text-success';
        break;
      case BadgeType.WARNING:
        color =  'bg-warning-100 text-warning';
        break;
      case BadgeType.DANGER:
        color = 'bg-danger-100 text-danger';
        break;
    }
    return `inline-block px-3 rounded-full ${color}`;
  }
  return (
    <div className={getClassName(type)}>
      {children || label}
    </div>
  );
}