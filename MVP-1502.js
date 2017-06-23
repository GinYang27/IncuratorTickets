//I think sth usefull in this ticket is $route.reload()
//It can update ng-view part only, maybe we can try it on login part

$scope.$on('resetEplore',function(){
    self.navbarSearchService.setTerm('');
    $route.reload();
});

//https://stackoverflow.com/questions/5964373/is-there-a-difference-between-s-g-and-s-g
if (searchTerm.replace(/\s+/g, "").length === 0) {
  self.searchTerm = '';
}

/* Triggered by user search items
 * Only trigger when flag changed
 */
function searchItems() {
    if(self.searchChangedFlag){
        self.itemIndex = 0; //!
        self.exploreItems = [];
        self.noItem = false;
        getSearchItems(self.searchTerm, self.searchTypes, self.itemInterest, self.dealStatus, self.itemSortby, 0, self.totalItemsPerPage);
        self.searchChangedFlag = false;
        self.itemIndex = self.itemIndex + self.totalItemsPerPage; //!
    } 
}

/**
 * When click view more buttom, we will query more items from backend
 */
function viewMore() {
    if (self.searchTerm !== '') {
        self.endIndex = self.itemIndex + self.totalItemsPerPage;
        getSearchItems(self.searchTerm, self.searchTypes, self.itemInterest, self.dealStatus, self.itemSortby, self.itemIndex, self.endIndex);
    } else {
        self.endIndex = self.itemIndex + self.totalItemsPerPage;
        getDealPreviewBox(self.itemInterest, self.dealStatus, self.itemSortby, self.itemIndex, self.endIndex);
    }
    self.itemIndex = self.itemIndex + self.totalItemsPerPage;
}
