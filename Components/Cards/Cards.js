import React, { useState } from 'react'
import style from '../Cards/Cards.module.css';
import Image from 'next/image';
import JsonData from "../../pages/MOCK_DATA.json"
import ReactPaginate from 'react-paginate';
export default function Cards() {
  const [users, setUsers] = useState(JsonData.slice(0, 51))
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 9
  const pageVisited = pageNumber * usersPerPage;
  const displayUsers = users.slice(pageVisited, pageVisited + usersPerPage)
    .map(user => {
      return (
        <div key={user.id} className={style.Cards}>
          <section className={style.CardsContainer}>
            <div className={style.Card}>
              <Image src="/door1.png" width={384} height={481} alt="image" />
              <h4 className={style.CardTitle}>{user.title}</h4>
              <p className={style.CardInfo}>{user.title}</p>
              <div className={style.color}>
                <span className={style.Circle1}></span>
                <span className={style.Circle2}></span>
                <span className={style.Circle3}></span>
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
      <div className='cardsContainer'>
        {displayUsers}
      </div>
      <div>
        <ReactPaginate
          previousLabel={<i className='bx bx-left-arrow-alt bx-md'></i>}
          nextLabel={<i className='bx bx-right-arrow-alt bx-md'></i>}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationsDisabled"}
          activeClassName={"paginationActive"}
        />
        <h1 className={style.pageCounter}>Стр {pageNumber + 1}/{pageCount}</h1>
      </div>

    </>
  )

}
