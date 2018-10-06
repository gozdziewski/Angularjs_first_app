'use strict';

var app = angular.module( 'applicationAngularjs', [] );

app.controller( 'controllerBook', [ '$scope', '$filter', function( $scope, $filter) {

    $scope.addBook = function(){
        $scope.books.splice( 0, 0, {Autor: $scope.booksAutor, Title : $scope.booksTitle, ISBN: $scope.booksISBN});
    };

    $scope.deleteBook = function( $index){
       $scope.books.splice( $index, 1);
    };

    $scope.editBook = false

    $scope.books = [
        {
            "Autor": "Ted Flr",
            "Title": "Title1",
            "ISBN": 123,
        },
        {
            "Autor": "Ed Glal",
            "Title": "Title2",
            "ISBN": 4231,
        },
        {
            "Autor": "Edi Cru",
            "Title": "Title3",
            "ISBN": 345543,
        },
        {
            "Autor": "Gab Glass",
            "Title": "Title4",
            "ISBN": 34554,
        },
        {
            "Autor": "John Flu",
            "Title": "Title5",
            "ISBN": 23413,
        }
    ]
}]);