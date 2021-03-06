var app = angular.module("demandas",['ngRoute']);

app.controller("demandasController", function($scope){

    $scope.botoesTopo = [
        {nome: "Subway", pedidos: "152", cor: 'aqua'},
        {nome: "Spoleto", pedidos: "132", cor:'green'},
        {nome: "Conveniencia", pedidos: "98", cor:'yellow'},
        {nome: "Drogaria", pedidos: "98", cor:'red'},
    ];
    $scope.menusSistema = [
        {nome: "Gerenciar Pedidos", pagina: "/lista", cor: 'aqua'},
        {nome: "Relatorio", pagina: "/", cor:'green'},
        {nome: "usuarios", pagina: "/", cor:'yellow'},
    ];

    $scope.pedidos = [
        {cod:"01", cliente:"Joao", loja: "Subway", status:"Pendente", label:"danger"},
        {cod:"02", cliente:"Joao", loja: "Spoleto", status:"Entregue", label:"success"},
        {cod:"03", cliente:"Joao", loja: "Subway", status:"Entregue", label:"success"},
        {cod:"04", cliente:"Joao", loja: "Spoleto", status:"Pendente", label:"danger"},
        {cod:"05", cliente:"Joao", loja: "Spoleto", status:"Entregue", label:"success"},
        {cod:"06", cliente:"Joao", loja: "Subway", status:"Entregue", label:"success"},
        {cod:"07", cliente:"Joao", loja: "Spoleto", status:"Pendente", label:"danger"},
    ];

});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {templateUrl: "templates/botoesPainelControle.html", controller: "damandasController"})
        .when("/lista", {templateUrl: "templates/listagem.html", controller: "damandasController"});
}]);


app.controller('damandasController', function ($scope, $location) {

});

