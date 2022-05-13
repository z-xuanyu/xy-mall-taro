/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:13:09
 * @LastEditTime: 2022-05-13 10:14:14
 * @Description: Modify here please
 */
import request from '@/utils/http/request'

enum Api {
  HomeData = 'homeData',
}

export const getHomeData = async () => {
  return await request({ url: Api.HomeData })
}
