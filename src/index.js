import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import calc from "./modules/calc";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer('15 october 2023')
menu()
modal()
scroll()
calc(100)
forms()
tabs()
slider('portfolio-content', 'portfolio-item', 'portfolio-item-active', 'portfolio-dots', 'dot')
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})