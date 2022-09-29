import { useEffect, useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CarouselFade from "../components/SkinsCarouselComponent";
import OneChampComponent from "../components/OneChampComponent"
import IndexAxios from "../services/indexAxios"

const OneChampPage = () => {
    const { name } = useParams();
    const indexAxios = new IndexAxios()
    const [champion, setChampion] = useState(null)

    useEffect(() => {
        indexAxios
            .getChampionDetails(name)
            .then((champ) => {
                setChampion(champ);
                console.log(champion)
            })
            .catch((err) => console.log(err))
    }, []);

    if (!champion) {
        return (
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    }

    return (

        <div className="d-flex justify-content-center mt-3">
            <OneChampComponent oneChamp={champion} />
        </div>

    )


}

export default OneChampPage
