import React, { useState } from 'react'
import style from '../Cards/Cards.module.css';
import Image from 'next/image';
import JsonData from "../../pages/MOCK_DATA.json"
import ReactPaginate from 'react-paginate';
export default function Cards() {
  const [users, setUsers] = useState(JsonData.slice(0,18))
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 6
  const pageVisited = pageNumber * usersPerPage;
  const displayUsers = users.slice(pageVisited, pageVisited + usersPerPage)
    .map(user => {
      return (
        <div key={user.id} className={style.Cards}>
          <section className={style.CardsContainer}>
            <div className={style.Card}>
              <div className={style.CardSaver}>
              <svg width="22" height="29" viewBox="0 0 28 34" xmlns="http://www.w3.org/2000/svg"><path d="M2.72234 2.14403C2.06287 2.80625 1.69238 3.70442 1.69238 4.64094V32.8903L14.0001 26.7107L26.3078 32.8903V4.64094C26.3078 3.70442 25.9373 2.80625 25.2778 2.14403C24.6183 1.4818 23.7239 1.10977 22.7913 1.10977H5.20887C4.27624 1.10977 3.38181 1.4818 2.72234 2.14403Z" stroke="#d7d7d7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
              <Image className={style.fullWidthImage} src="/door1.png" width={384} height={481} alt="image" />
              <h4 className={style.CardTitle}>{user.title}</h4>
              <p className={style.CardInfo}>{user.title}</p>
              <div className={style.color}>
                <span tabIndex={1} className={style.Circle1}></span>
                <span tabIndex={2} className={style.Circle2}></span>
                <span tabIndex={3} className={style.Circle3}></span>
              </div>
            </div>
          </section>
        </div>
      )
    })
  const pageCount = Math.ceil(users.length / usersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className={style.cardsContainer}>
        {displayUsers}
      </div>
      <div>
        <ReactPaginate
          previousLabel={<i className='bx bx-left-arrow-alt bx-md'></i>}
          nextLabel={<i className='bx bx-right-arrow-alt bx-md'></i>}
          pageCount={pageCount}
          onPageChange={changePage} 
          containerClassName={style.paginationBtn}
          previousLinkClassName={"Btn"}
          nextLinkClassName={style.nextBtn}
          disabledClassName={style.paginationsDisabled}
          activeClassName={style.paginationActive}
        />
        <h1 className={style.pageCounter}>Стр {pageNumber + 1}/{pageCount}</h1>
      </div>
    </>
  )

}
