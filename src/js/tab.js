/**
 * 
 * @authors heinan
 * @email hei-nan@hotmail.com
 * @date    2018-02-01 16:23:11
 * @discribe 
 */

var tit = ['一', '二', '三'];
var cont = ['一', '二', '三'];
class Tab {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.init()
    }
    init() {

        this.createWrap();
        this.addevent()
    }
    createTit() {
        let ol = document.createElement('ol');
        ol.className = 'tit';
        tit.map((item, index, arr) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ol.append(li)
        })
        return ol;

    }
    createContent() {
        let ul = document.createElement('ul');
        ul.className = 'list';
        cont.map((item, index, arr) => {
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.append(li)
        })
        return ul;

    }
    addevent() {
        let oli = document.querySelectorAll('ol li');
        let uli = document.querySelectorAll('ul li');
        [...oli].map((item, index, arrs) => {

            item.addEventListener('click', () => {
                this.addActive(item, arrs);
                [...uli].map((item, index) => {

                    item.style.display = 'none';

                });
                uli[index].style.display = 'block';
            })
        })
    }
    addActive(item, arrs) {
        [...arrs].map((item) => {
            item.className = '';
        });
        item.className = 'active';
    }

    createWrap() {
        let oDiv = document.createElement('div');
        oDiv.className = 'tab';
        var ol = this.createTit();
        var ul = this.createContent();

        oDiv.append(ol)
        oDiv.append(ul);

        document.body.append(oDiv);


    }
}

export default tab;