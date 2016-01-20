var ViewModel = function(){
    // this가 헷갈리니까 바인딩이 currentCat으로 들어갔는데 
    // self로 this를 대체
    var self = this;
    this.currentCat = ko.observable ( new Cat() );
    this.incrementCounter = function(){
        self.currentCat().clickCount(self.currentCat().clickCount() + 1 );
        
    };
}

var Cat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.title = ko.observable('Infant');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('');

    this.nickname = ko.observableArray(['jiwoo','jang','sung','vong','ahn'])

    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if( clicks > 5){
            title = 'Newborn'
        }
        else{
            title = 'tabby';
        }
        return title;
    }, this);
}

ko.applyBindings(new ViewModel());