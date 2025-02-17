import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { getStoredReadList } from '../../utility/addToDb';
import { getStoredWishList } from '../../utility/addToWishList';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    // const [tabNo, setTabNo] = useState(1);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setReadList(readBookList);
        setWishList(wishBookList);
    }, []);

    // const saveTabNumber = num => {
    //     setTabNo(num);
    //     console.log(`You are on Tab ${num}`);
    // }

    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === 'No. of Pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList('sorted by pages', sortedReadList);
        }
        if (sortType === 'Ratings') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
            console.log('sorted by ratings', sortedReadList);
        }

    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h3 className="text-3xl font-bold my-6">Listed Books</h3>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-semibold text-lg bg-lime-500 text-white">
                        {
                            sort ? `Sort By ${sort}` : 'Sort By'
                        }
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                        <li onClick={() => handleSort('No. of Pages')}><a>No. of Pages</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-5'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex flex-col gap-5'>
                        {
                            wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;