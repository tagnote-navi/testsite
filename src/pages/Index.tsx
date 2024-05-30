import React from 'react';
import Sidebar from '../inc/Sidebar';
import pickup1 from '../assets/img/pickup1.jpg';
import pickup2 from '../assets/img/pickup2.jpg';
import pickup3 from '../assets/img/pickup3.jpg';
import main1 from '../assets/img/main1.jpg';
import main2 from '../assets/img/main2.jpg';
import main3 from '../assets/img/main3.jpg';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div>
      <div id="content">
        <div id="pickup" className="wrapper">
          <article>
            <img src={pickup1} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link to="/company">READ MORE</Link></div>
          </article>

          <article>
            <img src={pickup2} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link to="/company">READ MORE</Link></div>
          </article>

          <article>
            <img src={pickup3} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link to="/company">READ MORE</Link></div>
          </article>
        </div>

        <div id="container" className="wrapper">
          <main>
            <article>
              <h2 className="article-title"><Link to="/company">タイトルテキストテキストテキストテキストテキスト</Link></h2>
              <ul className="meta">
                <li><Link to="/company">2020/01/01</Link></li>
                <li><Link to="/company">カテゴリ1</Link></li>
              </ul>
              <Link to="/company"><img src={main1} alt="テキストテキストテキスト" /></Link>
              <p className="text">
                本文テキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <div className="readmore"><Link to="/company">READ MORE</Link></div>
            </article>

            <article>
              <h2 className="article-title"><Link to="/company">タイトルテキストテキストテキストテキストテキスト</Link></h2>
              <ul className="meta">
                <li><Link to="/company">2020/01/01</Link></li>
                <li><Link to="/company">カテゴリ1</Link></li>
              </ul>
              <Link to="/company"><img src={main2} alt="テキストテキストテキスト" /></Link>
              <p className="text">
                本文テキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <div className="readmore"><Link to="/company">READ MORE</Link></div>
            </article>

            <article>
              <h2 className="article-title"><Link to="/company">タイトルテキストテキストテキストテキストテキスト</Link></h2>
              <ul className="meta">
                <li><Link to="/company">2020/01/01</Link></li>
                <li><Link to="/company">カテゴリ1</Link></li>
              </ul>
              <Link to="/company"><img src={main3} alt="テキストテキストテキスト" /></Link>
              <p className="text">
                本文テキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <div className="readmore"><Link to="/company">READ MORE</Link></div>
            </article>
          </main>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Index;
