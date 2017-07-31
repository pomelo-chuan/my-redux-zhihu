import { httpGet, httpPost } from '../utils/request';

const urlBase = 'https://lovestreet.leanapp.cn/zhihu';

export async function fetchNewsLatest() {
    return httpGet(urlBase + '/news/latest');
}