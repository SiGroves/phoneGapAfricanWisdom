
var app = angular.module("QuoteRandomizer", []);

app.controller("QuoteCtrl", function($scope, $http) {
	//console.log('we are starting');
	$scope.loading=true;





$scope.quoteList=[
  				{'quote':"The axe forgets, the tree remembers",'author':'unknown','source':'Swahili'}, 
                {'quote':"He who thinks he is leading and has no one following him is only taing a walk",'author':'unknown','source':'Swahili'}, 
                {'quote':"Hunt in every forest for there is wisdom in them all",'author':'unknown','source':'Swahili'},
                {'quote':"A man who uses force is afraid of reasoning",'author':'unknown','source':'Swahili'},
                {'quote':"The African race is a rubber ball. The harder you dash it to the ground, the higher it will rise",'author':'unknown','source':'Swahili'},
                {'quote':"He who is destined for power does not have to fight for it",'author':'unknown','source':'Swahili'},
                {'quote':"A chick that will grow into a cock can be spotted the very day it hatches",'author':'unknown','source':'Swahili'},
                {'quote':"A child's fingers are not scalded by a piece of hot yam which his mother puts into his palm",'author':'unknown','source':'Swahili'},
                {'quote':"Do not look where you fell, but where you slipped",'author':'unknown','source':'Swahili'},
                {'quote':"It takes a whole village to raise a child",'author':'unknown','source':'Swahili'},
                {'quote':"The lizard that jumped from the high iroko tree to the ground said he would praise himself if no one else did",'author':'unknown','source':'Swahili'},
                {'quote':"The mouth which eats does not talk",'author':'unknown','source':'Swahili'},
                {'quote':"The sun will shine on those who stand before it shines on those who kneel under them",'author':'unknown','source':'Swahili'},
                {'quote':"Those whose palm-kernels were cracked for them by a benevolent spirit should not forget to be humble",'author':'unknown','source':'Swahili'},
                {'quote':"You must judge a man by the work of his hands",'author':'unknown','source':'Swahili'},
                {'quote':"By the time the fool has learned the game, the players have dispersed",'author':'unknown','source':'Swahili'},
                {'quote':"Do not call the forest that shelters you a jungle",'author':'unknown','source':'Swahili'},
                {'quote':"Even though the old man is strong and hearty, he will not live forever",'author':'unknown','source':'Swahili'},
                {'quote':"Fire and gunpowder do not sleep together",'author':'unknown','source':'Swahili'},
                {'quote':"Hunger is felt by a slave and hunger is felt by a king",'author':'unknown','source':'Swahili'},
                {'quote':"If you are in hiding, don't light a fire",'author':'unknown','source':'Swahili'},
                {'quote':"It is no shame at all to work for money",'author':'unknown','source':'Swahili'},
                {'quote':"It is the calm and silent water that drowns a man",'author':'unknown','source':'Swahili'},
                {'quote':"No one tests the depth of a river with both feet",'author':'unknown','source':'Swahili'},
                {'quote':"One falsehood spoils a thousand truths",'author':'unknown','source':'Swahili'},
                {'quote':"The moon moves slowly, but it crosses the town",'author':'unknown','source':'Swahili'},
                {'quote':"There is no medicine to cure hatred",'author':'unknown','source':'Swahili'},
                {'quote':"When a king has good counselors, his reign is peaceful",'author':'unknown','source':'Swahili'},
                {'quote':"When a man is wealthy, he may wear an old cloth",'author':'unknown','source':'Swahili'},
                {'quote':"When a woman is hungry, she says, 'Roast something for the children that they might eat.' ",'author':'unknown','source':'Swahili'},
                {'quote':"When the fool is told a proverb, its meaning has to be explained to him",'author':'unknown','source':'Swahili'},
                {'quote':"When you follow in the path of your father, you learn to walk like him",'author':'unknown','source':'Swahili'},
                {'quote':"A bird will always use another bird's feathers to feather its own nest",'author':'unknown','source':'Swahili'},
                {'quote':"He that digs a grave for his enemy, may be digging it for himself",'author':'unknown','source':'Swahili'},
                {'quote':"A person is a person because of other persons",'author':'unknown','source':'Swahili'},
                {'quote':"If you don't stand for something, you will fall for anything",'author':'unknown','source':'Swahili'},
                {'quote':"You overcame the rain, but what about the dew?",'author':'unknown','source':'Swahili'},
                {'quote':"As soon as you experience hunger, why do you always want to eat?",'author':'unknown','source':'Swahili'},
                {'quote':"Water follows the slope",'author':'unknown','source':'Swahili'},
                {'quote':"If the day of harvesting or eating yams is the same as the day of planting yams, even goats will not be allowed to eat the yam peels",'author':'unknown','source':'Swahili'},
                {'quote':"Big fish are caught with big fish hooks",'author':'unknown','source':'Swahili'},
                {'quote':"If the young are not initiated into the village, they will burn it down just to feel its warmth",'author':'unknown','source':'Swahili'},
                {'quote':"When deeds speak, words are nothing",'author':'unknown','source':'Swahili'},
                {'quote':"Never make the mistake of thinking it is easy to be capable. Overt Competency may be your greatest struggle in life",'author':'unknown','source':'Swahili'},
                {'quote':"To love someone who does not love you is like shaking a tree to make the dew drops fall",'author':'unknown','source':'Swahili'},
                {'quote':"If you can't resolve your problems in peace, you can't solve war",'author':'unknown','source':'Swahili'},
                {'quote':"I pointed out to you the stars and all you saw was my fingertip",'author':'unknown','source':'Swahili'},
                {'quote':"A beautiful woman is not without defects",'author':'unknown','source':'Swahili'},
                {'quote':"If you want to go fast, go alone. If you want to go far, go together",'author':'unknown','source':'Swahili'},
                {'quote':"Songs learnt from outside sources are not used at a dance for long",'author':'unknown','source':'Swahili'},
                {'quote':"Do not follow the path. Go where there is no path to begin the trail",'author':'unknown','source':'Swahili'},
                {'quote':"The habit of thinking is the habit of gaining strength",'author':'unknown','source':'Swahili'},
                {'quote':"Wealth, if you use it, comes to an end; learning, if you use it, increases",'author':'unknown','source':'Swahili'},
                {'quote':"The pillar of the world is hope",'author':'unknown','source':'Swahili'},
                {'quote':"Until lions write their own history, the tale of the hunt will always glorify the hunter",'author':'unknown','source':'Swahili'},
                {'quote':"Tomorrow belongs to the people who prepare for it today",'author':'unknown','source':'Swahili'},
                {'quote':"If the chicken attacks you in the morning, RUN first because it may have grown teeth overnight",'author':'unknown','source':'Swahili'},
                {'quote':"I always get confused when there’s a proverb sourced as an African proverb. There’s hundreds of different ethno-cultural groupings on the continent with varied languages and histories of interactions with each other and with non-African groups. It’s not like there’s some sort of single wise old person somewhere who spouts all the proverbs for all Africans",'author':'unknown','source':'Swahili'},
                {'quote':"He who learns, teaches",'author':'unknown','source':'Swahili'},
                {'quote':"If you close your eyes to facts, you will learn through accidents",'author':'unknown','source':'Swahili'},
                {'quote':"Every morning in Africa a gazelle awakens knowing it must today run faster than the fastest lion or it will be eaten. Every morning a lion awakens knowing it must outrun the slowest gazelle or it will starve. It matters not whether you are a gazelle or a lion, when the sun rises you had better be running",'author':'unknown','source':'Swahili'},
                {'quote':"The truth is like a baobab tree, you cannot embrace it with one pair of arms",'author':'unknown','source':'Swahili'},
                {'quote':"Moonlight does not enable one to see to gather firewood",'author':'unknown','source':'Swahili'},
                {'quote':"What suffices for a small project won't do for an enormous project",'author':'unknown','source':'Swahili'},
                {'quote':"The salt we have for seasoning the chicken is insufficient, and you go and kill a goat!",'author':'unknown','source':'Swahili'},
                {'quote':"The foolish little antelope cut firewood for the leopard",'author':'unknown','source':'Swahili'},
                {'quote':"The small spotted wild cat mistook the leopard for a relative!",'author':'unknown','source':'Swahili'},
                {'quote':"An antelope wouldn't be strong enough to carry the tusks an elephant bears",'author':'unknown','source':'Swahili'},
                {'quote':"One does not set out for a hunting camp with nothing but bananas",'author':'unknown','source':'Swahili'},
                {'quote':"As the ocimbamba seeks the low lying tree so friends gather to the friendly person",'author':'unknown','source':'Swahili'},
                {'quote':"What the guest would like is what the host is ashamed to offer as not being good enough and the guest is disappointed",'author':'unknown','source':'Swahili'},
                {'quote':"If heedless of warning it is you who will suffer, not I",'author':'unknown','source':'Swahili'},
                {'quote':"It makes a difference whose ox is gored",'author':'unknown','source':'Swahili'},
                {'quote':"Burning charcoal always turns to ashes",'author':'unknown','source':'Swahili'},
                {'quote':"People working on the slope of a mountain do not look at the buttocks of one another",'author':'unknown','source':'Swahili'},
                {'quote':"If two selfish young men sit next to a pot of water, the water spills out on the ground",'author':'unknown','source':'Swahili'},
                {'quote':"If an opportunity is not taken when it comes, it passes away",'author':'unknown','source':'Swahili'},
                {'quote':"Little palm tree, stop crying, your child is the tall palm tree",'author':'unknown','source':'Swahili'},
                {'quote':"If the young palm tree wants to stay alive, it grows next to the odum tree",'author':'unknown','source':'Swahili'},
                {'quote':"One palm nut cannot be peeled twice",'author':'unknown','source':'Swahili'},
                {'quote':"Even though the sound of the horn is not pleasant, it is still blown by a man's mouth",'author':'unknown','source':'Swahili'},
                {'quote':"You make a new arrow by comparing it to an old one",'author':'unknown','source':'Swahili'},
                {'quote':"The witch is going! The witch is going! but if you are not a witch you don't turn around to look",'author':'unknown','source':'Swahili'}
                ];	selQuote =getRandomInt($scope.quoteList.length);
	//console.log(selQuote);
	$scope.thisQuote=$scope.quoteList[selQuote];
	$scope.quote=$scope.thisQuote.quote;
	$scope.author=$scope.thisQuote.author;
	//console.log($scope.quote);
	$scope.loading=false;


	$scope.getNewQuote=function(){
		selQuote =getRandomInt($scope.quoteList.length);
		//console.log(selQuote);
		$scope.thisQuote=$scope.quoteList[selQuote];
		$scope.quote=$scope.thisQuote.quote;
		$scope.author=$scope.thisQuote.author;
		//console.log($scope.quote);
	}
});


app.directive('animateOnChange', function($timeout) {
  return function(scope, element, attr) {
    scope.$watch(attr.animateOnChange, function(nv,ov) {
        //console.log('animate on change triggered');
      if (nv!=ov) {
        element.addClass('changed');
        $timeout(function() {
          element.removeClass('changed');
        }, 4000); // Could be enhanced to take duration as a parameter
      }
    });
  };
});


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}