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
