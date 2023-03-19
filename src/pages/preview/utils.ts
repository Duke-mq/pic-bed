import axios from "axios";
const apiUrl = `https://api.github.com/repos/${"duke-mq"}/${"img-library"}/contents/${"img"}`;
export const getAllPathName = async () => {
  // 发送 GET 请求获取文件信息
  return axios
    .get(apiUrl)
    .then((response) => {
      // 解析响应数据
      const data = response.data;
      // 提取文件名称
      const filenames = data.map((item) => item.name);
      return filenames;
    })
    .catch((error) => {
      console.error(error);
    });
};
