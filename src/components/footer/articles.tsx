import type { JSX } from 'react';
import ArticlesItem from './articles-item';
import { articleTexts } from '../../const/const';

function Articles(): JSX.Element {
  return (
    <ul className="page-footer__articles-list">
      {articleTexts.map((text) => (
        <ArticlesItem key={text} text={text}/>
      ))}
    </ul>
  );
}

export default Articles;