"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function DarckModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="pr-3">
      {currentTheme === "dark" ? (
        <LightModeIcon
          style={{ color: "white" }}
          onClick={() => setTheme("light")}
        />
      ) : (
        <DarkModeIcon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
