$(document).ready(function () {
    var randomQuote;
    var randomAuthor;
    function getQuote() {
        var quotes = [
            "Lying or deceiving others.",
            "Stealing or taking what doesn't belong to you.",
            "Bullying or harassing others.",
            "Spreading rumors or gossip.",
            "Ignoring or excluding someone intentionally.",
            "Manipulating others for personal gain.",
            "Mocking or ridiculing someone.",
            "Being disrespectful or rude.",
            "Intentionally damaging someone else's property.",
            "Cheating or dishonesty in relationships or activities.",
            "Betraying someone's trust.",
            "Blaming others for your own mistakes.",
            "Being aggressive or violent towards others.",
            "Taking advantage of someone's vulnerability.",
            "Discriminating against others based on race, gender, religion, or other characteristics.",
            "Gaslighting or invalidating someone's feelings.",
            "Neglecting the needs of those who depend on you.",
            "Being passive-aggressive in your communication.",
            "Humiliating or embarrassing someone publicly.",
            "Exploiting others for personal gain.",
            "Disregarding someone's boundaries or consent.",
            "Being selfish or unwilling to compromise.",
            "Engaging in harmful gossip or spreading false information.",
            "Seeking revenge or holding grudges.",
            "Being disrespectful towards authority figures.",
            "Making derogatory comments about someone's appearance or abilities.",
            "Belittling someone's achievements or aspirations.",
            "Pressuring someone into doing something they're uncomfortable with.",
            "Sabotaging someone else's success or happiness.",
            "Using others for your own entertainment.",
            "Discriminating against marginalized or vulnerable groups.",
            "Ignoring someone who is in need of help.",
            "Withholding information or resources that could benefit others.",
            "Encouraging destructive behaviors in others.",
            "Being dismissive of someone else's feelings or experiences.",
            "Disregarding the well-being of animals or the environment.",
            "Inciting conflict or stirring up drama.",
            "Being condescending or patronizing towards others.",
            "Encouraging others to engage in harmful behaviors.",
            "Creating or perpetuating stereotypes.",
            "Manipulating or controlling others through fear or intimidation.",
            "Using derogatory language or slurs.",
            "Belittling someone's mental health struggles or challenges.",
            "Engaging in cyberbullying or online harassment.",
            "Exploiting power differentials in relationships or situations.",
            "Taking credit for someone else's work or ideas.",
            "Sabotaging someone else's opportunities or success.",
            "Enabling destructive behaviors in others.",
            "Fostering division or discord within communities.",
            "Being indifferent to the suffering of others."
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
window.requestAnimationFrame = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

