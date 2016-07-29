(function($){
    /*
    * Variables kan declare hmasa phawt, Caching the DOM pawh a tih theih ang
    * Nakinah DOM traverse nawn angaihloh nan.
    * */
    var menu = $('.Sortable');
    var output = $('.Output');

    /*
    * Kan menu items te database atangin kan lak loh avangin
    * pages variable chhungah kan hard code rih
    * Array of Objects a ni e (A kohdan hrelo tan)
    * */
    var pages = [
        {"id" : 1,"name": "Home"},
        {"id" : 2,"name": "About"},
        {"id" : 3,"name": "Gallery"},
        {"id" : 4,"name": "Contact"}
    ];

    var listTemplate = [];

    /*
    * Kan page object array ami data te khi kan menu items tur te an nih avangin
    * Kan iterate chhuak a, kan menu template tur kan siam a ni mai
    * */
    for (i = 0; i < pages.length; i++)
    {
        listTemplate[i] = '<li id="Menu__item--'+ pages[i].id +'" class="Menu__item"><div><span class="Item__handle">'+
                          '</span>' + pages[i].name + '</div>'+
                          '</li>';
    }

    /*
    * Kan menu template kan siam zo a, kan DOM ah kan vawm lut chiah
    * */
    menu.append(listTemplate);

    /*
    * He lai ve thung hi chu nestedSortable API a ni mai.
    * Heta options kan pek leh kan HTML elements kan remdan hi han en ila,
    * a hriatthiam theih mai awm e. Options dang tam tak ala awm ania.
    * */
    $('.Sortable').nestedSortable({
        forcePlaceholderSize: true, handle:'span',items:'li',opacity: .6,placeholder:'Placeholder',toleranceElement:'> div',maxLevels: 3,isTree:true,update: updateList
    });


    /*
    * Menu items kan tih danglam apiangin he method hi a call ang.
    * */
    function updateList()
    {
        menuStructure = menu.nestedSortable('toHierarchy',{startDepthCount: 0});
        
        /*
        * Server-side script hman tangkai theihna hmun a ni e, XHR vel thawnchhuahna tur.
        * */
        output.html(JSON.stringify(menuStructure))
    }
})(jQuery);