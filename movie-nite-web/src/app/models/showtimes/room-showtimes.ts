import { TimeShowing } from "./time-showing";

export interface RoomShowtimes 
{
    filmId      :number;
    fileName    :string;
    time        :TimeShowing[];
}
