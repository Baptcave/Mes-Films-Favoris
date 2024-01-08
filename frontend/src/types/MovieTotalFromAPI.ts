import { MovieInfoFromAPI } from "./MovieInfoFromAPI";
import { MovieCommentFromAPI } from "./MovieCommentFromAPI";

export type MovieTotalFromAPI = MovieInfoFromAPI & MovieCommentFromAPI;
