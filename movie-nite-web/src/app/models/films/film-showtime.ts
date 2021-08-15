import { CinemaShowtime } from "../cinemas/cinema-showtime";
import { FilmShowtimeDetail } from "./film-showtime-detail";

export interface FilmShowtime 
{
    film       :FilmShowtimeDetail;
    cinemas     :CinemaShowtime[];
}
