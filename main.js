'use strict';

var app = angular.module('app', []);


app.controller('WordsCtrl', function ($scope) {
	


	var matches = [ { words: ['green', 'sour'], name:'lime' }, { words: ['sweet', 'sour'], name:'soursop' }, { words: ['sweet', 'green'], name:'cherimoya' }, { words: ['green', 'yellow'], name:'mango' }, { words: ['yellow', 'sour'], name:'kumquat' }, { words: ['yellow', 'sweet'], name:'banana' }, { words: ['big', 'green'], name:'watermelon' }, { words: ['big', 'sour'], name:'grapefruit' }, { words: ['big', 'sweet'], name:'papaya' }, { words: ['big', 'yellow'], name:'honey dew melon' }, { words: ['soft', 'green'], name:'avocado' }, { words: ['soft', 'sour'], name:'kiwi' }, { words: ['soft', 'sweet'], name:'blueberry' }, { words: ['soft', 'yellow'], name:'apricot' }, { words: ['soft', 'big'], name:'tomato' }, { words: ['green', 'seed'], name:'peas' }, { words: ['sour', 'seed'], name:'grape seeds' }, { words: ['sweet', 'seed'], name:'poppy seed' }, { words: ['yellow', 'seed'], name:'sesame seed' }, { words: ['big', 'seed'], name:'potato' }, { words: ['soft', 'seed'], name:'chia' }, { words: ['green', 'veggie'], name:'kale' }, { words: ['sour', 'veggie'], name:'bitter melon' }, { words: ['sweet', 'veggie'], name:'carrot' }, { words: ['yellow', 'veggie'], name:'squash' }, { words: ['big', 'veggie'], name:'pumpkin' }, { words: ['soft', 'veggie'], name:'bell pepper' }, { words: ['seed', 'veggie'], name:'peas' } ];

	$scope.words = [{id: 1, word: 'green'}, {id: 2, word: 'sour'},{id: 3, word: 'sweet'},{id: 4, word: 'yellow'},{id: 5, word: 'big'},{id: 6, word: 'soft'},{id: 7, word: 'seed'},{id: 8, word: 'veggie'},];

	$scope.selected = [];

	$scope.match = '';


	$scope.check = function(word) {
	    var pos = $scope.selected.indexOf(word);
	    var wordMatch = '';
	    if (pos > -1) {
	      $scope.selected.splice(pos,1);
	    } else {
	      $scope.selected.push(word);
	    }

	    if ($scope.selected.length === 2) { // the 2 words have been selected

	    	matches.forEach(function(obj, idx){

	    		if ( _.contains(obj.words, $scope.selected[0])  && _.contains(obj.words, $scope.selected[1])) { // compare words in matches with selected ones
	    			console.log(obj.name);
	    			$scope.match = obj.name;
	    			return;
	    		}

	    	});
	    } else {
	    	$scope.match ='';
	    }    	
	  } 
	  
	$scope.disable = function(word) {
	    return $scope.selected.length >= 2 && $scope.selected.indexOf(word) == -1;
	}

});
