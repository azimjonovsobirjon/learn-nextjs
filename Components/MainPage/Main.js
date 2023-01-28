import style from '../MainPage/Main.module.css';
import React from 'react'
import Cards from '../Cards/Cards';

export default function MainPage() {
  return (
    <main className={style.main}>
      <div className={style.title}>
        <h1>Премиум двери</h1>
        <p>Найдено: 42 дверей</p>
      </div>
      <div className={style.filter}></div>
      <>               
                <Cards/>
      </>
    </main>
  )
}
