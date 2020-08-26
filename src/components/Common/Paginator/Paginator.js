import React, {useState} from 'react';
import styles from './Paginator.module.css'

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, itemsToShow}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let minBlockNumber = 1;
    let maxBlockNumber = Math.ceil(pagesCount / itemsToShow);
    let [blockNumber, setBlockNumber] = useState(Math.floor(currentPage / itemsToShow) + 1);
    let [showAll, setShowAll] = useState(false);

    const pagesMapFunction = (p) => {
        return <span className={`${styles.pageBlock} ${currentPage === p && styles.selectedPage}`}
                     onClick={(event) => onPageChanged(p)}> {p} </span>
    }

    return (
        <div className={styles.paginatorBlock}>
            <div>
                <button onClick={() => {
                    setShowAll(!showAll);
                    setBlockNumber(Math.floor(currentPage / itemsToShow) + 1);
                }}>{showAll ? 'Hide all pages' : 'Show all pages'}</button>
            </div>
            {!showAll && <div className={styles.pages}>
                {blockNumber > minBlockNumber && <button onClick={() => setBlockNumber(blockNumber - 1)}>Back</button>}
                {
                    pages
                        .filter(p => p >= (blockNumber - 1) * itemsToShow && (p < blockNumber * itemsToShow))
                        .map(p => pagesMapFunction(p))
                }
                {blockNumber < maxBlockNumber && <button onClick={() => setBlockNumber(blockNumber + 1)}>Next</button>}
            </div>}

            {showAll && <div>
                {pages.map(p => pagesMapFunction(p))}
            </div>}


        </div>
    )
}

export default Paginator;