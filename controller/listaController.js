angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaControler", function ($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "William", telefone: "9999999"},
        {nome: "Maria", telefone: "7777777"},
        {nome: "Teresa", telefone: "8888888"},
    ];
    /*$scope.adicionarContato = function (contato) {
        $scope.contatos.push(contato);
        delete $scope.contato;
    };*/
    $scope.classe = "selecionado";

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isSelecionados = function (contatos) {
        return contatos.some(function (contato) {
        return contato.selecionado;
        });
    };
});