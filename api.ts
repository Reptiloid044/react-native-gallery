import axios from "axios";

const API_LINK = "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043";

export async function getPictures() {
  const result = await axios.get(API_LINK)
  console.log("From server", result.data)
  return result.data;
};
