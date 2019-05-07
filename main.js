var carApp = angular.module('carApp', []);

// Déclaration du contrôleur coffeeCtrl avec $http et $scope en dépendances
carApp.controller('carCtrl', function ($http, $scope) {
        // Récupération des données des fichiers json
        $http.get('voiture.json')
                .then(function (reponse) {
                    // reponse.data renvoie le contenu de coffee.json dans la variable coffees
                    $scope.marques = reponse.data;
                });
            });
