import { AgeRating } from "./age-rating";
import { Images } from "./images";
import { ReleaseDate } from "./release-date";

export interface Film 
{
    film_id         :number;
    imbd_id         :number;
    imbd_title_id   :string;
    film_name       :string;
    release_dates   :ReleaseDate[];
    age_ratings     :AgeRating[];
    film_trailer    :string;
    synopsis_long   :string;
    images          :Images;
}
