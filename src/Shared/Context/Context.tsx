import { createContext } from "react";
import { RealStateContext } from "../Domain/RealStateContext";

export const Context = createContext<RealStateContext>({} as RealStateContext);
