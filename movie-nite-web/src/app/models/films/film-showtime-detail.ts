import { AgeRating } from "./age-rating";
import { Images } from "./images";

export interface FilmShowtimeDetail 
{
    filmId      :number;
    imbdId      :number;
    imbdTitleId :string;
    fileName    :string;
    versionType :string;
    ageRatings  :AgeRating[];
    filmImages  :Images;
}
