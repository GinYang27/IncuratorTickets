# IncuratorTickets
I will log my thinking and code for incurator.com front-end in this rep

----- MVP - 1502 -----
1. itemIndex and endIndex in explore controller is messy, mixed with var and this
   --> I removed all var index, each time get deals from empty, like init, search, filter, before this set index = 0, after that set index         = index + 20, so that view more can ignore duplicate items.
2. when user click navbar-explore, reset the explore page.
3. sometimes view more btn doesn't work well, cuz 1
4. search function in both navbar and explore page. 
   --> I cannot use $broadcast to achieve cross-controllers operation if the controller is not in ng-view
