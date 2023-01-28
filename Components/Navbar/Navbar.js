import style from '../Navbar/Navbar.module.css';
import Image from 'next/image';
import { MenuOutlined, SearchOutlined, BookOutlined } from '@ant-design/icons';
export default function Navbar() {
    return(
        <header className="header">
        <div className={style.navContainer}>
            <nav className={style.nav}>
                <div className={style.menuPanel}>
                    <div className={style.navMenu}>
                    <MenuOutlined style={{ fontSize: '1.5rem', color: '#FFFFFF' }}/>
                    </div>
                    <div>
                        <form className={style.languages}>
                            <select id="language" name="language">
                                <option value="ru">Рус</option>
                                <option value="eng">Eng</option>
                                <option value="uz">Uz</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className={style.navLogo}>
                    <div>
                        <Image src='/Logo.png' width={125} height={62} alt = "logo img"/>
                    </div>
                </div>
                <div className={style.searchPanel}>
                <SearchOutlined className={style.searchIcon} />
                <BookOutlined className={style.savedIcon} />
                    <button className='searchPanelBtn btn'>Связаться с нами</button>
                </div>
            </nav>
        </div>
        </header>
    )
}