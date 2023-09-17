"use client";
import { CMD, Tag } from "./geist";
import { ModeSwitcher } from "./ModeSwitcher";
import { Button } from "./ui";
// import useHasMounted from "./hook/useHasMounted";

export const Panel = () => {
  // const hasMounted = useHasMounted();
  return (
    // hasMounted &&
    <>
      {/* <Button icon={<CMD />} onClick={() => {}} aria={"CMD"} /> */}

      <Button icon={<Tag />} onClick={() => {}} aria={"Tag"} />

      <ModeSwitcher />
    </>
  );
};
