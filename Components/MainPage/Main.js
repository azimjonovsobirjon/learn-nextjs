import style from '../MainPage/Main.module.css';
import React from 'react'
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';

export default function MainPage() {
  return (
    <main className={style.main}>
   
      <div className={style.title}>
        <h1>Премиум двери</h1>
        <div className={style.titleLeft}>
        <p>Найдено: 36 дверей</p>
        <button className={style.filter}>Filter</button>
        </div>
      </div>
      <Filter/>             
      <Cards/>
    </main>
  )
}
