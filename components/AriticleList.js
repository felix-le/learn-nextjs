import React from 'react';
import articleStyles from '../styles/Article.module.css';
import { ArticleItem } from './ArticleItem';

function AriticleList({ articles }) {
  return (
    <div className={articleStyles.gird}>
      {articles.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  );
}

export default AriticleList;
