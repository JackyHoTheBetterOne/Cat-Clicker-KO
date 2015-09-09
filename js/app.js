var initialCats = [
  {name: "Jacob"},
  {name: "Makeup"},
  {name: "Screwup"}
]

var Cat = function (data) {
  this.clickCount = ko.observable(0);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable("http://oddstuffmagazine.com/wp-content/uploads/2011/09/Small-Cat-580x574.png");
  this.imgAttribution = ko.observable("http://oddstuffmagazine.com/");
  this.rank = ko.computed(
    function () {
      var
        self = this,
        count = self.clickCount();
      if (count < 10) {
        return "Baby";
      } else if (count >= 10 && count < 20) {
        return "Infant";
      } else if (count >= 20) {
        return "Grown-up";
      }
    }, this
  );

  this.nicknames = ko.observableArray([
    { name: "Apple" },
    { name: "Orange" },
    { name: "Pie" }
  ]);
}

var ViewModel = function () {
  var self = this;

  self.catList = ko.observableArray([]);

  initialCats.forEach(function(cat){
    self.catList.push(new Cat(cat));
  });

  self.currentCat = ko.observable(this.catList()[0]);

  self.incrementCounter = function () {
    var cat = self.currentCat();
    cat.clickCount(cat.clickCount() + 1);
  };

  self.setCurrentCat = function (cat) {
    self.currentCat(cat);
  };
}

ko.applyBindings(new ViewModel());
