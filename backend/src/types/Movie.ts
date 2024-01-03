import { MovieFromIMDB } from "./MovieFromIMDB";
import { MovieComment } from "./MovieComment";

export type Movie = MovieFromIMDB & MovieComment;
