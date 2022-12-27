import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./customers/index";
import LastProjectSlice from "./lastProjects/index";
import TrustedSlice from "./trusted/index";
import SingleSlice from './before-after/index'
import VacancySlice from './vacancy/index'
import YoutubeSlice from './youtube/index'
import TeamSlice from './team/index'

export const store = configureStore({
  reducer: {
    customer: CustomerSlice,
    lastProject: LastProjectSlice,
    trusted: TrustedSlice,
    single: SingleSlice,
    vacancy: VacancySlice,
    youtube: YoutubeSlice,
    team: TeamSlice,
  },
});
