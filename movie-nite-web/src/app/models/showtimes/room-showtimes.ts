import { TimeShowing } from "./time-showing";

export interface RoomShowtimes 
{
    film_id      :number;
    film_name    :string;
    times        :TimeShowing[];
}
