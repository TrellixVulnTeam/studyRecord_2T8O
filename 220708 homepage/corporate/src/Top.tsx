import React from 'react';
import "./scss/Top.scss";;

function Top() {
    return (
        // Ucc6497084246731ce06ff3668f70dbce
        <div className="Top">
            <header>
                <h1><span>with</span>Uto</h1>
                <div className="hamburger">
                    <i className="fa-solid fa-bars fa-3x off" />
                </div>
                <div className="hamburger">
                    <i className="fa-solid fa-minus fa-3x on" />
                </div>
                <ol>
                    <li className='top'><p>トップ</p></li>
                    <li className='intro'><p>自己紹介</p></li>
                    <li className='works'><p>作品</p></li>
                    <li className='about'><p>withUtoについて</p></li>
                    <li className='message'><p>問い合わせ</p></li>
                </ol>
            </header>
            <main>
                <div className="content top">
                    <img src="./images/withuto.png" alt="withutologo" />
                </div>
                <div className='content intro'>
                    <img src="./images/withuto.png" alt="withutologo" />
                </div>
                <div className='content works'>
                    <img src="./images/withuto.png" alt="withutologo" />
                </div>
                <div className='content about'>
                    <img src="./images/withuto.png" alt="withutologo" />
                </div>
                <div className='content message'>
                    <img src="./images/withuto.png" alt="withutologo" />
                </div>
            </main>
        </div>
    );
}

export default Top;