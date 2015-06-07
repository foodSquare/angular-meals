
app.controller('mainController', function($scope, $mdSidenav, $mdUtil) {
    $scope.focusinControl = {
    };

    var buildToggler = function (navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
            .toggle()
            .then(function () {
                //$log.debug("toggle " + navID + " is done");
            });
        },300);
        return debounceFn;
    };

    $scope.toggleLeft = buildToggler('left');
    $scope.menu = {
        options: [
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/',
                label: 'Restaurants'
            },
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/challenge',
                label: 'My challenges'
            },
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/friends',
                label: 'Top Friends'
            },
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/settings',
                label: 'Settings'
            }
        ],
        onCloseSideBar: function () {
            $mdSidenav('left').close()
            .then(function () {
                //Something
            });
        }
    };
  



    var imageA = 'css/img/ic_local_restaurant_24px.svg';
    var imageB = 'css/img/foodB.jpeg';
    var imageC = 'css/img/foodC.jpeg';
	    
    $scope.todos = [
        {
            face : imageA,
            what: 'Vienna Restaurant',
            who: 'French food',
            type: 'icon',
            notes: "The restaurant is one of the best in La Paz"
        },
        {
            face : imageB,
            what: 'Pepito Restaurant',
            who: 'French food',
            type: 'image',
            notes: "The restaurant is one of the best in La Paz"
        },
        {
            face : imageA,
            what: 'Brazilian Restaurant',
            who: 'Brazilian food',
            type: 'icon',
            notes: "All Free"
        },
        {
            face : imageC,
            what: 'Bolivian Restaurant',
            who: 'Bolivian food',
            type: 'image',
            notes: "All the bolivian foods are here!"
        },
        {
            face : imageC,
            what: 'Vienna Restaurant',
            who: 'French food',
            type: 'image',
            notes: "The restaurant is one of the best in La Paz"
        }
    ];

   $scope.camera = {
        onClick: function () {
            angular.element("#photo").trigger('click');
        }
   };

});