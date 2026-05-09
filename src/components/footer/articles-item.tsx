import type { JSX } from "react";

type ArticlesItemProps = {
  text: string;
}

function ArticlesItem({text}: ArticlesItemProps): JSX.Element {
  return (
      <li className="page-footer__articles-item">
        <p className="page-footer__article-text">
          {text}
        </p>
      </li>
  );
}

export default ArticlesItem;