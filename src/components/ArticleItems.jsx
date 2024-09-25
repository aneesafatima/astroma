import React from "react";

function ArticleItems({
  data,
  coverArticleIndex,
  setCoverArticleIndex,
  setCoverArticle,
}) {
  const uniqueTitlesSet = new Set();
  let articlesNum = 0;
  const changeCoverArticle = (i) => {
    setCoverArticleIndex(i);
    setCoverArticle(data[i]);
    articlesNum = 0;
  };

  return (
    <div className="md:w-fit  md:h-[90vh] md:overflow-y-auto w-full overflow-x-auto md:pr-4 items-scrollbar">
      <ul className="text-[#808080]  md:space-y-7 space-x-7 md:space-x-0 bg-transparent flex flex-row md:flex-col mb-2 tems-center">
        {data?.map((el, i) => {
          if (
            i !== coverArticleIndex &&
            !uniqueTitlesSet.has(el.data[0].title)
          ) {
            uniqueTitlesSet.add(el.data[0].title);
            articlesNum += 1;
            return (
              <li
                className="flex h-fit min-w-fit space-x-5 md:space-x-0  scroll-item  cursor-pointer transition-all bg-[#1f1e1ebe] rounded-md pr-3"
                key={el.data[0].nasa_id}
                onClick={() => changeCoverArticle(i)}
              >
                <img
                  src={el.links[0].href}
                  alt="article-cover"
                  className="w-[133px] h-[133px] md:w-32 md:h-32 object-cover md:mr-3 rounded-md"
                />
                <div className=" flex flex-col justify-between text-[10px]  space-y-3 sm:space-y-2">
                  <div className="info text-xs pt-3 ">
                    <span className="pr-3 border-r-[1px] border-[#808080]">
                      {el.data[0].photographer?.split("/")[1] ?? "unknown"}
                    </span>
                    <span className="px-3">
                      {new Date(el.data[0].date_created).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-white text-sm md:text-[16px] ">
                    {el.data[0].title.substring(0, 33)}...
                  </h2>
                  <div className="info text-[10px] pb-3  space-x-1 ">
                    {el.data[0].keywords?.map((keyword, i) => {
                      if (i < 2)
                        return (
                          <span key={i}>
                            {keyword + `${i !== 1 ? "," : ""}`}
                          </span>
                        );
                    }) ?? "Space and Universe"}
                  </div>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default ArticleItems;
