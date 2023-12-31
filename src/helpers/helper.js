export const checkRoute=(path,route)=>{
const pattArryy= path.split("/");
return pattArryy.includes(route)
}