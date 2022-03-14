export const tabs = () => {
    const parent = document.querySelector('.result__aside');

    if(parent) {
        let tabsWrap = document.querySelector('.result__aside_tabs');
        let tabs = document.querySelectorAll('.result__aside_tabs_item');
        let els = document.querySelectorAll('.result__aside_list');

        function hideTabs() {
            tabs.forEach(i => {
                i.classList.remove('active');
            })
            els.forEach(i => {
                i.classList.remove('active');
            })
        }

        function showTabs(index = 0) {
            tabs[index].classList.add('active');
            els[index].classList.add('active');
        }

        hideTabs();
        showTabs();

        tabsWrap.addEventListener('click', (e) => {
            let target = e.target;

            if(target.classList.contains('result__aside_tabs_item')) {

                tabs.forEach((item, index) => {
                    if(target == item) {
                        hideTabs();
                        showTabs(index);
                    }
                })
            }
        })

    }
}