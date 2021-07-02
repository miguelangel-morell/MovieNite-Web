import { Showtimes } from 'src/app/models/showtimes/showtimes';

export interface CinemaShowtime
{
    cinemaId    :number;
    cinemaName  :string;
    distance    :number;
    logoUrl     :string;
    showtimes   :Showtimes;
}
