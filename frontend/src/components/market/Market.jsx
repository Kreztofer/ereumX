import './market.scss';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { options } from '../../constants';
import Pagination from '../Pagination';
import loading from '../../images/loading.gif';

const Market = () => {
  const [coins, setCoins] = useState([]);
  const { data, isLoading } = useQuery('data', () => {
    return (async () => {
      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    })();
  });

  useEffect(() => {
    setCoins(data?.data?.coins);
  }, [data]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const pageLength = coins?.length;

  const currentItems = coins?.slice(indexOfFirstItem, indexOfLastItem);

  const npages = Math.ceil(pageLength / itemsPerPage);

  return (
    <div className="market-bg" id="Market">
      <div className="box-width">
        <>
          {isLoading ? (
            <div className="loading">
              <img src={loading} alt="loading" />
            </div>
          ) : (
            <div>
              <h1 className="market-title">
                Market <span>Prices</span>
              </h1>

              <div className="market">
                <div className="market-header">
                  <p>Coin</p>
                  <div>
                    <p>Price</p>
                    <p>24hr Update</p>
                    <p>Market Cap</p>
                  </div>
                </div>

                <div className="market-items"></div>
                {currentItems?.map((coin) => (
                  <div className="market-item" key={coin.uuid}>
                    <div className="market-item_coin">
                      <img src={coin.iconUrl} alt="coin" />
                      <p>{coin.name}</p>
                    </div>
                    <div className="market-item_details">
                      <p> {parseFloat(coin.price).toFixed(2)}</p>
                      <p
                        className={`${
                          coin.change.charAt(0) === '-' ? 'neg' : 'pos'
                        }`}
                      >
                        {coin.change}%
                      </p>
                      <p>{coin.marketCap}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                pageLength={pageLength}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                npages={npages}
              />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Market;
