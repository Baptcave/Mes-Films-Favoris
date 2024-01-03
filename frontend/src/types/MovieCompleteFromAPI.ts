import { MovieOnlyFromAPI } from "./MovieOnlyFromAPI";
import { MovieCommentFromAPI } from "./MovieCommentFromAPI";

export type MovieCompleteFromAPI = MovieOnlyFromAPI & MovieCommentFromAPI;
