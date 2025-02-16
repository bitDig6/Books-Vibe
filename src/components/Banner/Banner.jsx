import bannerImg from '../../assets/images/books.jpg';
import { scrollToDiv } from '../../utility/scrollToElem';

const Banner = () => {
    return (
        <div className="hero bg-base-300 lg:rounded-2xl p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="rounded-lg shadow-2xl" />
                <div className='space-y-6'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button onClick={scrollToDiv} className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;