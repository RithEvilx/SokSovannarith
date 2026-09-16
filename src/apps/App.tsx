import "./providers/i18next";
import { changeLanguage } from "i18next";
import { version } from "../../package.json";
import { useEffect, useState } from "react";
import { Float } from "@chakra-ui/react";
// Components
import Router from "./router/router";
import { Toaster } from "@/shared/ui/toaster";

const App = () => {
  const [isDebug] = useState<boolean>(() => localStorage.getItem("debug") === "true");
  const [isProjectDate] = useState<boolean>(() => localStorage.getItem("projectDate") === "true");

  useEffect(() => {
    const setDefault = (key: string, value: string) => {
      if (localStorage.getItem(key) === null) localStorage.setItem(key, value);
    };

    setDefault("language", "en");
    setDefault("debug", "false");
    setDefault("projectDate", "false");

    const lng = localStorage.getItem("language") || "en";
    changeLanguage(lng);
  }, []);

  return (
    <>
      <Toaster />
      <Router />
      {isDebug && (
        <Float top="20px" right="60px" zIndex={99999}>
          Version {version}
        </Float>
      )}
      {isProjectDate && (
        <Float top="20px" right="110px" zIndex={99999}>
          Created Date: 12 Feb 2026
        </Float>
      )}
    </>
  );
};

export default App;
