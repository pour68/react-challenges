import { useContext } from 'react';
import { SlideContext } from '../contexts/SlideContext';

const SlideItem = () => {
    const { review } = useContext(SlideContext);

    return (<div className='slide__item'>
        <figure className='slide__figure'>
            <img src={review.image} alt={review.name} />
            <figcaption>
                <i className="ri-double-quotes-r"></i>
            </figcaption>
        </figure>
        <article className='slide__info'>
            <header>
                <h4>{review.name}</h4>
                <h6>{review.job}</h6>
            </header>
            <div>
                <p>{review.text}</p>
            </div>
        </article>
    </div>);
}



export default SlideItem;