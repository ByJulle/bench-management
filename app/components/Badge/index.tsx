import React, { ReactElement } from "react";

export enum BadgeType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}
export interface Props {
  children?: ReactElement;
  label: string;
  type: BadgeType;
}

export default function Badge({
  type = BadgeType.PRIMARY,
  label,
  children,
}: Props): ReactElement {
  return <div className="bg-red-400">{label}</div>;
}
