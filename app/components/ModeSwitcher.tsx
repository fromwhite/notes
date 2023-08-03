"use client";
import { Day, Night } from "./geist";
import { Button } from "./ui";
import useDarkMode from "./hook/useDarkMode";

export default function () {
  const [theme, set] = useDarkMode();

  return (
    <>
      {theme == "light" ? (
        <Button
          icon={<Day />}
          onClick={() => {
            set("dark");
          }}
        />
      ) : (
        <Button
          icon={<Night />}
          onClick={() => {
            set("light");
          }}
        />
      )}
    </>
  );
}
