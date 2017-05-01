'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives'
				},
				{
					name: 'Scopes for fun and profit',
					creatorName: 'Bojan Vasic',
					duration: '45min',
					level: 'Advanced',
					abstract: 'Angular Fundamentals'
				},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'John Wayne',
					duration: '2 hr',
					level: 'Medium',
					abstract: 'This session will explain directives'
				}
			]
		}
	}

	);