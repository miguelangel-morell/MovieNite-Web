import { AgeRating } from "./age-rating";
import { Images } from "./images";

export interface FilmShowtimeDetail 
{
    film_id         :number;
    imbd_id         :number;
    imbd_title_id   :string;
    film_name       :string;
    version_type    :string;
    age_rating      :AgeRating[];
    images          :Images;
}
