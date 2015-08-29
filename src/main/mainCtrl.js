
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
                label: 'Mis Fotos',
                status: 'enabled'
            },
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/challenge',
                label: 'Mis retos',
                status: 'disabled'
            },
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/friends',
                label: 'Mis amigos',
                status: 'disabled'
            },
            {
                icon: 'css/img/ic_local_restaurant_24px.svg',
                href: './#/settings',
                label: 'Configuracion',
                status: 'disabled'
            }
        ],
        onCloseSideBar: function (item) {
            if (item.status.toLowerCase() === 'disabled') {
                return false;
            }

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
    
    function readerHandler(e2) { 
        var store = angular.element(".foodsquare-previewimage img")[0];
        store.src = e2.target.result; 
    }

    $scope.setFiles = function (fileInput) {
        //console.log(event.files)
        var fileDisplayArea = angular.element(".foodsquare-previewimage")[0];
        fileDisplayArea.style.display = "block";
        var file = fileInput.files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerHTML = "";

                var img = new Image();
                img.src = reader.result;

                fileDisplayArea.appendChild(img);
            }

            reader.readAsDataURL(file); 
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }

           
        /*var fileobj = event.files[0]; 
        var fr = new FileReader();
        fr.onload = readerHandler;  
        fr.readAsText(fileobj); */

        
    };

});