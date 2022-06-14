/*
 * @Author: xuanyu
 * @LastEditors: xuanyu
 * @email: 969718197@qq.com
 * @github: https://github.com/z-xuanyu
 * @Date: 2022-05-13 10:13:09
 * @LastEditTime: 2022-06-14 11:02:59
 * @Description: 首页相关api接口
 */
import httpService from '@/utils/http/httpService'

enum Api {
  HomeData = 'homeData',
}

export const getHomeData = () => httpService.get(Api.HomeData)
