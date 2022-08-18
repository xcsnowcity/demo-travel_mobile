import Header from "components/header";
import 'components/searchbox';

const index = document.getElementById('index-page');
const header = index.querySelector('.header');

new Header(header,10,index);

