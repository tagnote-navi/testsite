import React from 'react';
import Sidebar from '../inc/Sidebar';
import company from '../assets/img/company.jpg';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div>
      <div id="content">
        <div id="pickup" className="wrapper">
          <article>
            <img src={company} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link to="/">READ MORE</Link></div>
          </article>

          <article>
            <img src={company} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link to="/">READ MORE</Link></div>
          </article>

          <article>
            <img src={company} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link to="/">READ MORE</Link></div>
          </article>
        </div>

        <div id="container" className="wrapper">
          <main>
            <article>
              <h2 className="article-title"><Link to="/">タイトルテキストテキストテキストテキストテキスト</Link></h2>
              <ul className="meta">
                <li><Link to="/">2020/01/01</Link></li>
                <li><Link to="/">カテゴリ1</Link></li>
              </ul>
              <Link to="/"><img src={company} alt="テキストテキストテキスト" /></Link>
              <p className="text">
                本文テキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <div className="readmore"><Link to="/">READ MORE</Link></div>
            </article>

            <article>
              <h2 className="article-title"><Link to="/">タイトルテキストテキストテキストテキストテキスト</Link></h2>
              <ul className="meta">
                <li><Link to="/">2020/01/01</Link></li>
                <li><Link to="/">カテゴリ1</Link></li>
              </ul>
              <Link to="/"><img src={company} alt="テキストテキストテキスト" /></Link>
              <p className="text">
                本文テキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <div className="readmore"><Link to="/">READ MORE</Link></div>
            </article>

            <article>
              <h2 className="article-title"><Link to="/">タイトルテキストテキストテキストテキストテキスト</Link></h2>
              <ul className="meta">
                <li><Link to="/">2020/01/01</Link></li>
                <li><Link to="/">カテゴリ1</Link></li>
              </ul>
              <Link to="/"><img src={company} alt="テキストテキストテキスト" /></Link>
              <p className="text">
                本文テキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <div className="readmore"><Link to="/">READ MORE</Link></div>
            </article>
          </main>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Index;
