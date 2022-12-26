import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customers/index";
import LastProjectSlice from "./lastProjects/index";
import TrustedSlice from "./trusted/index";

export const store = configureStore({
  reducer: {
    customer: CustomerSlice,
    lastProject: LastProjectSlice,
    trusted: TrustedSlice,
  },
});
