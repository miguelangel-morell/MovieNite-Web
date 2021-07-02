import { CinemaShowtime } from "../cinemas/cinema-showtime";
import { FilmShowtimeDetail } from "./film-showtime-detail";

export interface FilmShowtime 
{
    filmDetail  :FilmShowtimeDetail;
    cinemas     :CinemaShowtime[];
}
