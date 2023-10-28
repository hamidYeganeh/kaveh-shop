import { FC } from "react";
import Styles from "./Skeleton.module.scss";
import { classnames } from "@/helpers";

export const Skeleton: FC = () => {
  const SkeletonClassNames = classnames(Styles.skeleton_container);

  return <div className={SkeletonClassNames}></div>;
};
