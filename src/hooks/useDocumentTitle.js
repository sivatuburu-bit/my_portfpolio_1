import { useEffect } from "react";
import { config } from "../config.js";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${config.name}` : `${config.name} | ${config.role}`;
  }, [title]);
}
