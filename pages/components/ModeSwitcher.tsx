import { Sun, Moon } from "./geist";
import { Button } from "./ui";
import { useDarkMode } from "./hook/useDarkMode";
import { useHasMounted } from "./hook/useHasMounted";

export const ModeSwitcher = () => {
  const [theme, set] = useDarkMode();
  const isMounted = useHasMounted();

  return (
    <>
      {isMounted && theme == "light" ? (
        <Button
          icon={<Sun />}
          onClick={() => {
            set("dark");
          }}
        />
      ) : (
        <Button
          icon={<Moon />}
          onClick={() => {
            set("light");
          }}
        />
      )}
    </>
  );
};
