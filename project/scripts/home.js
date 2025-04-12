document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});
 
const openButton = document.querySelector("#openButton")
const dialogBox = document.querySelector("#dialogBox")
const closeButton = document.querySelector("#closeButton")

openButton.addEventListener('click', () => {
  dialogBox.showModal();
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});

const openInfo = document.querySelector("#openInfo")
const dialogInfo = document.querySelector("#dialogInfo")
const closeInfo = document.querySelector("#closeInfo")

openInfo.addEventListener('click', () => {
  dialogInfo.showModal();
});

closeInfo.addEventListener('click', () => {
  dialogInfo.close();
});

const openInfor = document.querySelector("#openInfor")
const dialogInfor = document.querySelector("#dialogInfor")
const closeInfor = document.querySelector("#closeInfor")

openInfor.addEventListener('click', () => {
  dialogInfor.showModal();
});

closeInfor.addEventListener('click', () => {
  dialogInfor.close();
});

const openIn = document.querySelector("#openIn")
const dialogIn = document.querySelector("#dialogIn")
const closeIn = document.querySelector("#closeIn")

openIn.addEventListener('click', () => {
  dialogIn.showModal();
});

closeIn.addEventListener('click', () => {
  dialogIn.close();
});
const openMore = document.querySelector("#openMore")
const dialogMore = document.querySelector("#dialogMore")
const closeMore = document.querySelector("#closeMore")

openMore.addEventListener('click', () => {
  dialogMore.showModal();
});

closeMore.addEventListener('click', () => {
  dialogMore.close();
});

const openFile = document.querySelector("#openFile")
const dialogFile = document.querySelector("#dialogFile")
const closeFile = document.querySelector("#closeFile")

openFile.addEventListener('click', () => {
  dialogFile.showModal();
});

closeFile.addEventListener('click', () => {
  dialogFile.close();
});