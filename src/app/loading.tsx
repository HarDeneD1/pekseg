import React from "react";
import { Spinner } from "@/components/ui/Spinner";

const Loading = () => {
  return <Spinner size={"large"} show={true} className="text-hatter"></Spinner>;
};

export default Loading;
