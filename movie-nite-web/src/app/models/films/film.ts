import { AgeRating } from "./age-rating";
import { Images } from "./images";
import { ReleaseDate } from "./release-date";

export interface Film 
{
    filmId          :number;
    imbdId          :number;
    imbdTitleId     :string;
    fileName        :string;
    releaseDates    :ReleaseDate[];
    ageRatings      :AgeRating[];
    filmTrailer     :string;
    synopsisLong    :string;
    filmImages      :Images;
}
