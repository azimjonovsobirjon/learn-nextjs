import React from 'react'
import style from '../Filter/Filter.module.css';
import {DownOutlined} from '@ant-design/icons';
export default function Filter() {
  return (
<div className={style.filterWrapper}>
    <div className={style.filterContainer}>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Категория<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
        <hr className={style.filterHr}/>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Материал<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
        <hr className={style.filterHr}/>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Форма<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
        <hr className={style.filterHr}/>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Цвет<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
        <hr className={style.filterHr}/>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Класс<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
        <hr className={style.filterHr}/>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Рейтинг<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
        <hr className={style.filterHr}/>
        <div className={style.filterDrdown}>
            <div className={style.filterItem}>
            Сортировать по<DownOutlined className={style.filterIcon}/>
            </div>
        </div>
       
    </div>
</div>
  )
}
