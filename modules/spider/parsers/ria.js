const newsChecker = require('../newsChecker');

const prop = {
  brand: 'РИА Новости',
  color: '#00235a',
};

exports.toParse = ($, item, cb) => {
  const news = [];
  try {
    const mainBlock = $('.b-index__main-wr');
    const mainNews = mainBlock.find('.b-index__main-news');
    const mainList = mainBlock.find('.b-index__main-list li');
    news.push({
      id: Math.floor((Math.random() * 100) + 1),
      brand: prop.brand,
      url: item[1],
      color: prop.color,
      title: newsChecker.toCheckNews(mainNews.find('.b-index__main-news-title').text()),
      link: newsChecker.toCheckNews(mainNews.find('a').first().attr('href'), item[1]),
      image: newsChecker.toCheckNews(mainNews.find('img').first().attr('src')),
    });
    mainList.each(function toGetNews() {
      news.push({
        id: Math.floor((Math.random() * 100) + 1),
        brand: prop.brand,
        url: item[1],
        color: prop.color,
        title: newsChecker.toCheckNews($(this).text()),
        link: newsChecker.toCheckNews($(this).find('a').attr('href'), item[1]),
      });
    });
  } catch (error) {
    cb(error);
  }
  cb(null, news);
};
