$(document).ready(function () {
    var randomQuote;
    var randomAuthor;
    function getQuote() {
        var quotes = [
            "Hold the door open for someone.",
            "Smile at strangers.",
            "Offer to help someone carry their groceries.",
            "Write a heartfelt letter to a friend or family member.",
            "Volunteer at a local charity or organization.",
            "Donate clothes or household items to those in need.",
            "Compliment someone sincerely.",
            "Offer to babysit for a friend or family member.",
            "Pay for someone's coffee or meal.",
            "Leave a positive note in a public place for someone to find.",
            "Listen attentively to someone who needs to talk.",
            "Offer to walk a neighbor's dog.",
            "Bring homemade treats to your workplace or neighbors.",
            "Send a care package to a friend or family member.",
            "Offer to tutor someone in a subject you're good at.",
            "Send flowers to someone who's going through a tough time.",
            "Plant a tree or flowers in a public space.",
            "Offer to mow your neighbor's lawn.",
            "Leave quarters at a laundromat for someone to use.",
            "Leave kind and encouraging comments on social media posts.",
            "Offer to run errands for an elderly neighbor.",
            "Share your umbrella with someone on a rainy day.",
            "Write positive affirmations on sticky notes and leave them in public places.",
            "Offer to fix something for someone who may not have the skills or tools.",
            "Offer to teach someone a new skill.",
            "Offer to drive a friend or family member to appointments or events.",
            "Donate blood to a local blood bank.",
            "Offer to take a friend's or neighbor's trash bins in and out.",
            "Send a small gift anonymously to someone.",
            "Offer to cook a meal for someone who's busy or going through a difficult time.",
            "Leave a generous tip for a server or delivery person.",
            "Volunteer to read to children at a local library or school.",
            "Offer to help someone move or pack.",
            "Share uplifting or inspiring stories with friends or colleagues.",
            "Offer to teach someone how to cook a new recipe.",
            "Write positive messages with sidewalk chalk in your neighborhood.",
            "Offer to do someone's laundry if they're overwhelmed.",
            "Send a thank-you note to someone who has made a difference in your life.",
            "Offer to mentor someone in your field or area of expertise.",
            "Donate books to a local library or school.",
            "Offer to walk or play with shelter animals.",
            "Bring snacks or treats to share at work or school.",
            "Offer to be a designated driver for friends or family.",
            "Send a text message to check in on someone you haven't heard from in a while.",
            "Hold a fundraiser for a cause you care about.",
            "Offer to help someone with their resume or job search.",
            "Create care packages for the homeless with essential items like socks, toiletries, and non-perishable food.",
            "Offer to do yard work for an elderly neighbor.",
            "Write positive reviews for local businesses you enjoy.",
            "Offer to help organize a community cleanup day."
        ];


        // round number
        var randomNumber = Math.floor(Math.random() * quotes.length);
        randomQuote = quotes[randomNumber];
        

        $(".quote").text(randomQuote);
       
    }

    $(".generate").on("click", function () {
        getQuote();
      
    });

});
