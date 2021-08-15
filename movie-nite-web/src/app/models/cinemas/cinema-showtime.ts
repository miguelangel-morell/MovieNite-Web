import { Showtimes } from 'src/app/models/showtimes/showtimes';

export interface CinemaShowtime
{
    cinema_id    :number;
    cinema_name  :string;
    distance    :number;
    logo_url     :string;
    showings   :Showtimes;
}
