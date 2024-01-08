import { MovieFromIMDB } from "./MovieFromIMDB";
import { MovieCommentToAPI } from "./MovieCommentToAPI";

export type MovieTotalToAPI = MovieFromIMDB & MovieCommentToAPI;
