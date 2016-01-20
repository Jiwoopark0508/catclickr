var ViewModel = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.level = ko.observable('Infant');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('');

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1 );
        if(this.clickCount() > 10){
            this.level('Big Baby');
        }
    };
}

ko.applyBindings(new ViewModel());