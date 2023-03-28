import { mainContentRender, tagListRender } from "./utility.js";

export const requestData = async (tagList) => {
  const res = await fetch(
    "https://tvendor-4db67-default-rtdb.europe-west1.firebasedatabase.app/productList.json", //this endpoint have some issues
  );
  
  const data = await res.json();
  console.log(JSON.stringify(data))
  data.forEach((element) => {
    element.categoryTag.forEach((tagname) => {
      if (!tagList.includes(tagname)) {
        tagList.push(tagname);
      }
    });
  });
  mainContentRender(data);
  tagListRender(tagList);
  localStorage.setItem("fresh-menu", JSON.stringify(data));
};
