(function () {

    angular.module('myApp')
        .service('sockService', sockService);

    function sockService($localStorage) {
        var self = this;

        self.item = [
            {
                "title": "Green and Orange Smiley Turtle Sock",
                "Description": "This sock will bring back memories both old and new!  Just watch out, it'll karate chop your toes right off!"
            },
            {
                "title": "Scary Mouse Sock",
                "Description": "For those of you who have a slightly demented personality... This sock will literally crawl out from under your bed and eat your cat..."
            },
            {
                "title": "Makes Your Toes feel Weird Sock",
                "Description": "You know that feeling where you get some lint or a small rock between your toes... Now imagine that with all of your toes... You masoquist!"
            },
            {
                "title": "Sexy Bad Hero Sock",
                "Description": "The halloween sock that your sexy outfit has been missing.  If you think you're in charge though... this sock will set you straight."
            },
            {
                "title": "Grandpa Sock One",
                "Description": "There's really not that much to say about this one... Its grandpa's sock... The one he lost four-wheeling across the neighbors front lawn."
            },
            {
                "title": "Lumberjack Sock",
                "Description": "The manliest man sock in the world.  While the other socks are sleeping quietly in your drawer, this sock is felling forests and building your log cabin."
            },
            {
                "title": "Hip Chick Sock",
                "Description": "This is for the high school preppy chick in each of you... You should go home and think long and hard about your life."
            },
            {
                "title": "Grandpa Sock Two",
                "Description": "Another of grandpa's famous sock stories... At this point you're starting to wonder if his socks were the only things he lost... "
            },
            {
                "title": "Grandpa Sock Three",
                "Description": "This sock makes it official.  Your grandpa has lost his mind... and it was all your fault... You should feel bad."
            },
            {
                "title": "Death Skull Sock",
                "Description": "Just in case you want to feel bad A for a day... while you're sitting there watching My little Pony... "
            },
            {
                "title": "Anime Cat Sock",
                "Description": "I'm sure we're going to get some flack for this one..."
            },
            {
                "title": "Grandma Sock",
                "Description": "Because we both know that Grandma was there for some of grandpa's adventures...",
            }

        ]
    }

})();
