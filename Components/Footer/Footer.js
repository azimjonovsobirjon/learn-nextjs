import React from 'react'
import style from '../Footer/Footer.module.css';
import Image from 'next/image';
export default function Footer() {
    return(
        <div className={style.footerCountainer}>
        <footer className={style.footer}>
            <div className={style.footerLogo}>
                <Image className={style.footerLogoImg} src="/Logo.png" width={146} height={74} alt='footer--logo-image'/>
                <p >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim</p>
                <div className={style.creditCards}>
                <Image src="/humo.png" width={57} height={34} alt='footer--logo-image'/>
                    <Image src="/payMe.png" width={57} height={17} alt="payme"/>
                    <Image src="/logos_visa.png" width={67} height={22} alt="visa"/>
                </div>
            </div>
            <div className={style.footerCompany}>
                <ul>
                    <li>
                        <a href="#" aria-label='Call-center'>Компании</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>О компании</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Где купить</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Новости / Блог</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Для партнеров</a>
                    </li>
                </ul>
            </div>
            <div className={style.footerService}>
                <ul>
                    <li>
                        <a href="#" aria-label='Call-center'>Сервисы</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Мебель на заказ</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Бесплатная консультация</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Доставка и сомовывоз</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>Сборка и установка</a>
                    </li>
                </ul>
            </div>
            <div className={style.footerWorkTime}>
                <ul>
                    <li>
                        <a href="#" aria-label='Call-center'>График работы</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>
                            Отдел прадаж: <br/>
    Пн-Пя с 9.00 до 18.00 <br/>
    Сб-Вс с 10.00 до 18.00
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label='Call-center'>
                            Отдел дизайна: <br/>
    Пн-Сб с 9.00 до 18.00
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.footerCallCenter}>
                <ul>
                    <li>
                        <a href="#" aria-label='Call-center'>Call - Центр</a>
                    </li>
                    <li>
                        <a href="#" aria-label='Phone number'>
                            <i className='bx bx-phone-call'></i>+998 97 344 24 17
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label='Phone number'>
                            <i className='bx bx-phone-call'></i>+998 97 344 24 17
                        </a>
                    </li>
                    <li className={style.contactBtn}>
                        <a href="#" aria-label='Contact button'>
                            <button className={style.contact}>Связаться с нами</button>
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label='Socials'>
                            <button className={style.social}><i className='bx bxl-instagram'></i></button>
                            <button className={style.social}><i className='bx bxl-facebook-circle'></i></button>
                            <button className={style.social}><i className='bx bxl-youtube'></i></button>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
    )
}