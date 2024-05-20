import React, {ReactNode} from "react";

export interface CardProps {
  children: ReactNode,
  classes: string
}

export function Card({children, classes}: CardProps) {
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Card
