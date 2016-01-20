var initialCats = [
    {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        nicknames : ['jiwoo','jang','sung','vong','ahn']
    },
    {
        clickCount : 0,
        name : 'CSAPP',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        nicknames : ['gom']
    },
    {
        clickCount : 0,
        name : 'hw3',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        nicknames : ['KaKao']
    },
    {
        clickCount : 0,
        name : 'office',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        nicknames : ['torrent']
    }
]

var ViewModel = function(){
    // this가 헷갈리니까 바인딩이 currentCat으로 들어갔는데 
    // self로 this를 대체
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat( catItem ));
    })

    self.currentCat = ko.observable( this.catList()[0]);

    this.incrementCounter = function(){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1 );
        
    };

    this.setCurrentCat = function(cat){
        self.currentCat(cat);
    }
}

var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);

    this.nickname = ko.observableArray(data.nicknames);

    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if( clicks > 5){
            title = 'Newborn'
        }
        else{
            title = 'baby';
        }
        return title;
    }, this);
}

ko.applyBindings(new ViewModel());